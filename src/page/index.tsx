/* Crie um App para cadastrar equipamentos de TI com código do patrimônio, número
de série, descrição e tipo. Os dados devem ser listados em formato de tabela na
parte inferior do formulário e com a opção de excluir. Salve as informações no
localstorage.
Crie uma validação para não permitir a gravação de registro em branco, conforme
print abaixo, onde newSkill e newTimeExperience é o estado de cada campo. */

import React, {useState, useEffect} from 'react';

import { Container, Form } from './styles'

interface EPITI {
    id: number;
    codpatrimonio: string;
    numserie: string;
    desc: string;
    tipo: string;
}

const Principal: React.FC = () => {
    const [codpatrimonio, setCodpatrimonio] = useState('')
    const [numserie, setNumserie] = useState('')
    const [desc, setDesc] = useState('')
    const [tipo, setTipo] = useState('')

    const [equipamentos, setEquipamentos] = useState<EPITI[]>(() => {
        const storagedEquipamentos = localStorage.getItem(
            '@equipamentos:cadastro'
        )

        if (storagedEquipamentos) {
            return JSON.parse(storagedEquipamentos)
        }
        return []
    })

    function AddEquipamento(event: any) {
        event.preventDefault();

        const data = {
            id: new Date().getTime(),
            codpatrimonio,
            numserie,
            desc,
            tipo
        }

        if(codpatrimonio === '' || numserie === '' || desc === '' || tipo === ''){
        alert('Favor preencher o campo em branco!!')
        return
        }

    console.log(data)

    setEquipamentos([...equipamentos, data])
    setCodpatrimonio('')
    setNumserie('')
    setDesc('')
    setTipo('')
    }

    function DeleteEquipamento(id: any) {
        setEquipamentos(equipamentos.filter(equip => equip.id !== id ))
    }

    useEffect(() =>{
        function loadData() {
            const storagedEquipamentos = localStorage.getItem(
                '@equipamentos:cadastro'
            )
    
            if (storagedEquipamentos) {
                return JSON.parse(storagedEquipamentos)
            }
        }
    loadData()
    }, [])

    useEffect(() => {
        function saveData() {
      localStorage.setItem('@equipamentos:cadastro', JSON.stringify(equipamentos))
    }
    saveData()
    }, [equipamentos])

    let showEquipamentos = []
    showEquipamentos = equipamentos.filter(equip => equip.id)
    console.log(showEquipamentos)

    return (
        <Container>
            <Form onSubmit={AddEquipamento}>
                <input
                name="codpatrimonio"
                placeholder="Código de patrimônio"
                type="text"
                value={codpatrimonio}
                onChange={(event) => setCodpatrimonio(event.target.value)}
                />
                <input
                name="numserie"
                type="text"
                placeholder="Digite seu número de serie"
                value={numserie}
                onChange={(event) => setNumserie(event.target.value)}
                />
                
                <input
                name="desc"
                type="text"
                placeholder="Digite a sua descrição"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                />

                <input
                name="tipo"
                type="text"
                placeholder="Digite seu tipo"
                value={tipo}
                onChange={(event) => setTipo(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </Form>
            <ul>
                {equipamentos.map(equip =>
                    <li key={equip.id}>
                        <span>Código de patrimônio: {equip.codpatrimonio}</span>
                        <span>Número de Série: {equip.numserie}</span>
                        <span>Descrição: {equip.desc}</span>
                        <span>Tipo: {equip.tipo}</span>
                        <a href='/'><button type="button" onClick={() => DeleteEquipamento(equip.id)}>Excluir</button></a>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default Principal;
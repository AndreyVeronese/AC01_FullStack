import { useState } from "react"

export const Homepage = () => {
    const [name, setName] = useState("");
    const [pesquisa, setpesquisa] = useState("");
    const [steps, setSteps] = useState(1);
    
    const chamaryt = () => {
        window.location.href = `https://www.zoom.com.br/search?q=${pesquisa}`;
    }
    const handleAddSteps = () => {
        if (steps === 4) return;
  
        setSteps(steps + 1);
     };

     const handleRemoveSteps = () => {
        if (steps === 1) return;
  
        setSteps(steps - 1);
     };

    
    return(
<>

        {steps === 1 && (
        <>

        <div>
            <h1>
                Seja bem-vindo ao sistema de compras!
            </h1>
        </div>
        <div>
            <h2>Iremos te direcionar para um site de produtos parceiro, mas antes nos diga seu nome.</h2>
        </div>
        
        <div>
            <label>Insira seu nome: </label>
            <br></br>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <br></br>
            <button onClick={handleAddSteps}>
            Avançar
            </button>
        </div>
        </>
        )}
        {steps === 2 && (
            <>
        
            <h2>Qual produto o interessa atualmente {`${name}`}?</h2>
            <div>
                <label>Insira o nome do produto: </label>
                <br></br>
                <input type="text" value={pesquisa} onChange={(e) => setpesquisa(e.target.value)} />
            </div>
            <br></br>
            <button onClick={handleAddSteps}>
            Avançar
            </button>
            <button onClick={handleRemoveSteps}>
                Voltar
            </button>
            </>
            
        )}
        {steps === 3 && (
            <>
            <h3>Por favor {`${name}`}, clique no botão "Pesquisar" </h3>
            <div>
                <br></br>
                <button onClick={chamaryt} >
                    Pesquisar
                </button>
                <button onClick={handleRemoveSteps}>
                Voltar
            </button>
            </div>
            </>
        )}


    </>
    )
}
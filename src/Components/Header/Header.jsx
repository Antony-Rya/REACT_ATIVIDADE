function Header(){

    return(
        <div>
            <div class="row text-bg-success p-3">
            <div class="col-8">
                <p class="m-0 p-0">Instituto federal da paraiba</p>
                <h1 class="m-0 p-0">IFPB</h1>
                <p class="m-0 p-0 fs-6">Ministério da educação</p>
            </div>
            <div class="col-4 d-flex align-items-center p-0">
                <input type="text" placeholder="Busca no portal"></input>
                <input type="button" value="🔍"></input>
            </div>
        </div>    
        <div class="row text-bg-success p-0 m-0 border d-flex align-items-center">
            <div class="col">Transparência</div>
            <div class="col">Portal do Estudante</div>
            <div class="col">Portal do servidor</div>
            <div class="col">Portal da TI</div>
            <div class="col">Acesso a informação</div>
            <div class="col">Acesso aos sistemkas</div>
            <div class="col">Comunicação</div>
            <div class="col">Webmail</div>
        </div>


        </div>
                
            

    );

}

export default Header;
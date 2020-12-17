import buttonTemplate from "App/modules/ui/components/template/ui.button.template";

export default `
<main id="main" class="container mt-5">
    <h2>Typography</h2>
    <div class="row">
        <div class="col-4">
            <div class="app-wrapper">
                <div class="title">Title</div>
                <h1>Title H1</h1>
                <h2>Title H2</h2>
                <h3>Title H3</h3>
                <h4>Title H4</h4>
                <h5>Title H5</h5>
            </div>
        </div>
        
        <div class="col-4">
             <div class="app-wrapper">
                <div class="title">Colors</div>
                <p class="fw-bold text-color-1">One color</p>
                <p class="fw-bold text-color-2">Two color</p>
                <p class="fw-bold text-color-3">Three color</p>
                <p class="fw-bold text-color-4">Four color</p>
                <p class="fw-bold">Text Color</p>
            </div>
        </div>
        
        <div class="col-4">
             <div class="app-wrapper">
                <div class="title">Font Weight</div>
                <p class="fw-bold">Weight 1</p>
                <p class="fw-bolder">Weight 2</p>
                <p class="fw-normal">Weight 3</p>
                <p class="fst-italic">Italic</p>
            </div>
        </div>     
        <div class="col-4">
             <div class="app-wrapper">
                <div class="title">Font Size</div>
                <p class="fs-1 fw-bold">Size 1</p>
                <p class="fs-2 fw-bold">Size 2</p>
                <p class="fs-3 fw-bold">Size 3</p>
                <p class="fs-4 fw-bold">Size 4</p>
                <p class="fs-5 fw-bold">Size 5</p>
                <p class="fs-6 fw-bold">Size 6</p>
            </div>
        </div>        
    </div>
    
    ${buttonTemplate}
    
    <h2>Produit</h2>
    <div class="row">
        <div class="col-12">
            <div class="app-wrapper">
                <app-product-loop></app-product-loop>
            </div>
        </div>
    </div>
    <h2>Formulaire</h2>
    <div class="row">
        <div class="col-4">
                <div class="app-wrapper">
                    <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                          </div>
                          <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
        </div>
    </div>
</main>
`;

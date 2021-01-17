export default `
        <div class="col-4">
            <app-wrapper title="Title">
                <h1>Title H1</h1>
                <h2>Title H2</h2>
                <h3>Title H3</h3>
                <h4>Title H4</h4>
                <h5>Title H5</h5>
            </app-wrapper>
        </div>
        
        <div class="col-4">
             <app-wrapper title="Text Colors">
                    <div class="w-50 d-inline-block">
                        <p class="text-primary">.text-primary</p>
                        <p class="text-secondary">.text-secondary</p>
                        <p class="text-success">.text-success</p>
                        <p class="text-danger">.text-danger</p>
                        <p class="text-warning">.text-warning</p>
                        <p class="text-info">.text-info</p>
                        <p class="text-light bg-dark">.text-light</p>                        
                    </div>
                    <div class="w-30 d-inline-block mx-1">
                        <p class="text-dark">.text-dark</p>
                        <p class="text-body">.text-body</p>
                        <p class="text-muted">.text-muted</p>
                        <p class="text-white bg-dark">.text-white</p>
                        <p class="text-black-50">.text-black-50</p>
                        <p class="text-white-50 bg-dark">.text-white-50</p>
                    </div>
            </app-wrapper>
        </div>
        
        <div class="col-4">
             <app-wrapper title="Font Weight">
                <p class="fw-bold">Weight 1 - .fw-bold</p>
                <p class="fw-bolder">Weight 2 - .fw-bolder</p>
                <p class="fw-normal">Weight 3 - .fw-normal</p>
                <p class="fst-italic">Italic - .fst-italic</p>
            </app-wrapper>
        </div>     
        <div class="col-4">
             <app-wrapper title="Font Size">
                <p class="fs-1 fw-bold">Size 1</p>
                <p class="fs-2 fw-bold">Size 2</p>
                <p class="fs-3 fw-bold">Size 3</p>
                <p class="fs-4 fw-bold">Size 4</p>
                <p class="fs-5 fw-bold">Size 5</p>
                <p class="fs-6 fw-bold">Size 6</p>
            </app-wrapper>
        </div>       
`;
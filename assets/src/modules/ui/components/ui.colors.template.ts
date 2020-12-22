export default `
<style>
    .app-color {
        padding: 15px;
        border-radius: 15px;
        color: white;
        display: inline-block;
        margin: 3px;
    }
    .app-gradient {
        display: block;
        width: 90%;
        margin: 15px;
        border-radius: 15px;
        text-align: center;
        color: white;
        padding: 15px;
    }
</style>

    <div class="col-4">
        <div class="app-wrapper">
            <div class="title">Colors</div>
            <span class="app-color bg-primary">Primary</span>
            <span class="app-color bg-secondary">Secondary</span>
            <span class="app-color bg-success">Success</span>
            <span class="app-color bg-warning">Warning</span>
            <span class="app-color bg-danger">Danger</span>
            <span class="app-color bg-dark">Dark</span>
            
        </div>
    </div>
    <div class="col-4">
        <div class="app-wrapper">
                <div class="title">Gradients</div>
                <span class="app-gradient gradient-primary">Primary</span>
                <span class="app-gradient gradient-secondary">Secondary</span>
                <span class="app-gradient gradient-success">Success</span>
                <span class="app-gradient gradient-warning">Warning</span>
                <span class="app-gradient gradient-danger">Danger</span>
                <span class="app-gradient gradient-dark">Dark</span>
                
        </div>
    </div>

`;
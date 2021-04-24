export default `
 <div class="col-8">
    <app-wrapper title="Form">
        <form>
        <app-input 
            type="email" 
            label="Email Address"
            helper="We'll never share your email with anyone else."></app-input>
            <br>
        <app-input 
            type="password" 
            label="Password"></app-input>
            <br>
        <app-input-checkbox
            label="Check me out"></app-input-checkbox>
            <br>
        <app-input-select
            label="Check me out"></app-input-select>
            <br>
            <app-button label="Submit" type="primary"></app-button>
            <app-button label="Cancel" type="dark"></app-button>
        </form>
    </app-wrapper>
</div>
`;
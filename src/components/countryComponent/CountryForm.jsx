import React from 'react';

export class CountryForm extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            description: "",
            id_country: 0,
        }
    }

    formEmpty = () => {
        this.setState({
            description: "",
            id_country: 0,
        }); 
    }

    handleForm = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        const description = this.state.description;
        const id_country = Math.floor(Math.random() * 999999);
        const countryItem = {
                description, 
                id_country 
        };
        
        let countriesNew = [];

        if ( description && id_country != 0){

            countriesNew = [...this.props.countries, countryItem];
            this.props.addCountry(countriesNew);
            this.formEmpty();
            console.log(countriesNew);
        }else{
            alert("Debe completar todos los campos!.")
        }
    }

    render(){
          return (
            <>
                <form className="row col align-items-start align-self-start"  onSubmit={(e) => this.submitForm(e)}>
                    <h5>Pais</h5>

                    <div className="row">
                        <div className="">
                            <label className="col-form-label">Nombre</label>
                        </div>
                            
                        <div className="">
                            <input type="text" name="description" value={ this.state.description } className="form-control" onChange={(e) => this.handleForm(e)}/>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div>
                            <button className="btn btn-primary" type="submit" >Añadir</button>
                        </div>
                    </div>

                </form>

            </>
          );
     
    }
     
}
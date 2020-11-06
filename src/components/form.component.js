import React,{ Component } from 'react';
import axios from 'axios';
class StudentForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            pocket_money:"",
            password:"",
            age:"",
            city:"",
            state:"",
            country:"",
            apiResponse:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});  
    }

    handleSubmit(event) {
        event.preventDefault();

        //console.log(this.state.first_name);
        //console.log(this.state.last_name);
        const studentInfo = {};
        studentInfo.first_name = this.state.first_name;
        studentInfo.last_name = this.state.last_name;
        studentInfo.email = this.state.email;
        studentInfo.pocket_money = this.state.pocket_money;
        studentInfo.password = this.state.password;
        studentInfo.age = this.state.age;
        studentInfo.city = this.state.city;
        studentInfo.state = this.state.state;
        studentInfo.zip = this.state.zip;
        studentInfo.country = this.state.country;

        console.log(studentInfo);

        


        axios.post('http://127.0.0.1/api/student/saveStudent.php',studentInfo)
        .then(res => {
            //console.log(res);
            console.log(res.data);
            this.setState({apiResponse:res.data});
        })
        .catch(err => console.log(err.stack))

        document.getElementById("res-element").innerHTML = this.state.apiResponse;
    }

    clearFormData(){
        document.getElementById("student-info").reset();
    }

    

    render()
    {
        return(
              <div className="card card-outline-secondary">
                        <div className="card-body">
                            <form id="student-info" className="form" role="form" autoComplete="off"  onSubmit={this.handleSubmit} >
                                <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">First name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="first_name" required={true} onChange={this.handleChange} />
                                        </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Last name</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="last_name" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="email"  name="email" required={true}  onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Pocket Money</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="pocket_money" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Password</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="password" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Age</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="age" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">City</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="city" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">State</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="state" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Zip</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="zip" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label">Country</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" type="text"  name="country" required={true} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label form-control-label"></label>
                                    <div className="col-lg-9">
                                        <input type="reset" className="btn btn-secondary" value="Cancel" onClick={this.clearFormData} />
                                        <input type="submit" className="btn btn-primary" value="Save"  />
                                    </div>
                                </div>
                            </form>
                            <textarea id="res-element"></textarea>
                        </div>
                    </div>
               
        )
    }
}



export default StudentForm;
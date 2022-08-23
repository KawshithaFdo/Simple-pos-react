import {Component} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Grid, Typography} from "@mui/material";
import GDSEButton from "../../components/common/Button";

class Item extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitItem} >
                <Grid container className="pt-2" spacing={3}>
                    <Grid item lg={12} xs={12} sm={12} md={12}>
                        <Typography variant="h2">Item Manage</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Item Code</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Item Code"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Description</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Description"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Qty</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Qty"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="subtitle1">Unit price</Typography>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="Unit price"
                            variant="outlined"
                            size="small"
                            style={{ width: '100%' }}
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid container style={{marginTop: '10px'}} direction="row" justifyContent="flex-end" alignItems="center">
                        <GDSEButton label="save" type="submit" size="small" color="primary" variant="outlined"/>
                    </Grid>
                </Grid>
            </ValidatorForm>

        );
    }
}


export default Item
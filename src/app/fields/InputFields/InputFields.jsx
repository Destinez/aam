import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export function Text(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <Form.Control type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} />
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
   )   
}


export function TextField(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
  
export function Boolean(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function Number(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <div className="input-group">
                    <input type="radio" name="fieldTypeNumber" onChange={e => setReadOnly(e.target.value)} />No Restrictions
                    <input type="radio" name="fieldTypeNumber" onChange={e => setReadOnly(e.target.value)} />Only Positive Numbers
                    <input type="radio" name="fieldTypeNumber" onChange={e => setReadOnly(e.target.value)} />Only Negative Numbers
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function Date(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Format</label>
                <div className="input-group">
                    <select className="form-control" onChange={ e => handleFieldType(e) }>
                        <option value="dd/mm/yyyy">dd/mm/yyyy</option>
                        <option value="mm/dd/yyyy">mm/dd/yyyy</option>
                        <option value="yyyy/mm/dd">yyyy/mm/dd</option>
                    </select>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function RadioGroup(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function CheckBoxGroup(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function RadioBox(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
export function File(){       
    return (
        <div>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Default Value</label>
                <div className="input-group">
                    <textarea type="text" className="form-control" placeholder="Default Value" aria-label="DefaultValue" aria-describedby="basic-addon1" onChange={e => setDefaultValue(e.target.value)} ></textarea>
                </div>
            </Form.Group>
            <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Read Only</label>
                <div className="input-group">
                    <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                </div>
            </Form.Group>
        </div>
        
   )   
}
  


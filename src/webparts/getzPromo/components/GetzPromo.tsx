import * as React from "react";



export default class GetzPromo extends React.Component {
  state = {
    selectedForm: "", // Default to Promo
  };
  handleFormToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedForm: event.target.value });
  };
  public render(): React.ReactElement {
    const { selectedForm } = this.state;
    return (
      <>
        {selectedForm == "" ? <div className="mt-4 d-flex justify-content-center">
          <div className="form-control d-flex">
            <button
              className="btn btn-primary w-50 me-2"
              onClick={() => this.setState({ selectedForm: "Promo" })}
            >
              Promo
            </button>
            <button
              className="btn btn-secondary w-50"
              onClick={() => this.setState({ selectedForm: "PS" })}
            >
              Physician Sample
            </button>
          </div>



        </div> : <div className="container">
          <h3 className="mt-4 text-center bg-light ">  {selectedForm} Material Issuance Form</h3>


          <div className="mt-4">
            <h4 className="text-center bg-light ">Employee Information</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Request No. 1</td>
                  <td>Name: Danish Nawaz</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <label htmlFor="sapCustomerCode" className="me-2">SAP Customer Code:</label>
                      <select id="sapCustomerCode" className="form-select w-50">
                        <option value="">Select</option>
                        <option value="123123">123123</option>
                        <option value="12312">12312</option>
                        <option value="123123">123123</option>
                      </select>
                    </div>


                  </td>
                  <td>
                    Department: SC SAP Transformation

                    <div>Auto Select: Internal Order:{selectedForm == "Promo" ? "9502-01-0001" : "M- with all materials"} </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h4 className="text-center bg-light ">Product Information</h4>
            {/* PromoTable */}
            {selectedForm == "Promo" ? (
              <> <div className="d-flex align-items-center">
                <label htmlFor="productDescription" className="me-2"> Product Description:</label>
                <select id="productDescription" className="form-select w-50">
                  <option value="">Select</option>
                  <option value="promoCode1">Promo Code 1</option>
                  <option value="promoCode2">Promo Code 2</option>
                  <option value="promoCode3">Promo Code 3</option>
                </select>
              </div>
                <div className="overflow-auto">
                  <table className="table table-bordered">
                    <thead>
                      <th>S.No</th>
                      <th>Product Description</th>
                      <th>Batch</th>
                      <th>Inventory Available</th>
                      <th>Required Quantity</th>
                      <th>Action</th>

                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          T-shirts
                        </td>
                        <td>
                          B2D45
                        </td>
                        <td>
                          50
                        </td>
                        <td>
                          <input type="number" className="form-control" name="RequiredQuantity" />
                        </td>
                       
                        <td>
                          <button className="btn btn-primary">Add</button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </>
            ) : (
              <>
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="productDescription" className="form-label highlight">
                      Product Description: <span>(Only PS Codes)</span>
                    </label>
                    <select id="productDescription" className="form-select mb-3">
                      <option selected>APIXAGET TAB 5MG</option>
                    </select>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead className="table-header">
                    <tr>
                      <th>Material Code</th>
                      <th>Product Name</th>
                      <th>Batch (FEFO)</th>
                      <th>Shelf Life</th>
                      <th>Inventory Available</th>
                      <th>Required Quantity</th>                     
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>M450001682</td>
                      <td>APIXAGET TAB 5MG PS 2'S</td>
                      <td>B2045</td>
                      <td>65%</td>
                      <td>2,560</td>
                      <td><input type="number" className="form-control" /></td>
                      
                      <td><button className="btn btn-primary">Add</button></td>
                    </tr>
                    <tr>
                      <td>M450001682</td>
                      <td>APIXAGET TAB 5MG PS 2'S</td>
                      <td>B2357</td>
                      <td>80%</td>
                      <td>4,560</td>
                      <td><input type="number" className="form-control" /></td>
                     
                      <td><button className="btn btn-primary">Add</button></td>
                    </tr>
                  </tbody>
                </table>
             
              </>

            )


            }


          </div>
          {selectedForm == "Promo" ? (
            <div className="mt-4">
              <h4 className="text-center bg-light ">Selected Products</h4>
              <div className="overflow-auto">
                <table className="table table-bordered">
                  <thead>
                    <th>S.No</th>
                    <th>Product Description</th>
                    <th>Batch</th>
                   <th>Quantity</th>
                   <th>Internal Order Number</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1
                      </td>
                      <td>
                        T-shirts
                      </td>
                      <td>
                        B2D45
                      </td>
                      <td>
                        50
                      </td>
                     <td>
                      1123123123
                     </td>
                      
                      <td>
                          <button className="btn btn-danger">Remove</button>
                        </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <h4 className="text-center bg-light ">Selected Products</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Products</th>
                    <th>Batch</th>
                    <th>Quantity</th>
                    <th>Internal Order Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>APIXAGET TAB 5MG PS 2'S</td>
                    <td>B2045</td>
                    <td>2000</td>
                    <td>450001682</td>
                    <td><button className="btn btn-danger">Remove</button></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>APIXAGET TAB 5MG PS 2'S</td>
                    <td>B2357</td>
                    <td>4000</td>
                    <td>450001682</td>
                    <td><button className="btn btn-danger">Remove</button></td>

                  </tr>
                </tbody>
              </table>
            </div>
          )
          }


          <div className="mt-4">
            <h4 className="text-center bg-light ">Shipping Information</h4>
            <p>Attachment: file</p>
          </div>

          <div className="mt-4">
            <h4 className="text-center bg-light ">Approver Hierarchy</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Approver Type</th>
                  <th>Approver Designation</th>
                  <th>Approver Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marketing</td>
                  <td>Created By:</td>
                  <td>Product Manager</td>
                  <td>Mr. XYZ</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Approved By:</td>
                  <td>Senior Product Manager</td>
                  <td>Mr. XYZ</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Approved By:</td>
                  <td>Director Marketing & Sales</td>
                  <td>Mr. XYZ</td>
                </tr>
                <tr>
                  <td>Warehouse</td>
                  <td>Approved By:</td>
                  <td>Support Officer</td>
                  <td>Raheel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h4 className="text-center bg-light ">Sales Order Number</h4>
            <p>
              SAP Order Number: <span className="highlight">200000025</span>{selectedForm == "Promo" ? "Auto generated emails for order confirmation" : "Order line created as per Batch Split & Batch Allocated)"}
            </p>
          </div>

          <div className="mt-4">
            <h4 className="text-center bg-light ">Consignment Details</h4>
            <p>Attachment: file</p>
          </div>
        </div>
        }


        {/* asd */}

      </>

    );
  }
}

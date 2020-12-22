import React from 'react'

import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  gap: 58px;
  grid-template-rows: auto 1fr;
`

const Groupform = styled.div`
  display: grid;
  gap: 16px;
  max-width: 465px;

  h2 {
    color: var(--gray_title);
    font-size: 18px;
  }

  .label_input {
    display: grid;
    gap: 7px;
  }
`

const Label = styled.label`
  color: var(--gray_title);
  font-size: 12px;
  font-weight: bold;
  padding-left: 2px;
`

const Wrapperinput = styled.div`
  position: relative; 
  
  .wraper_icon {
    pointer-events: none;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--padding_input2);
    height: 100%;

    span {
      color: var(--gray);
    }
  }
  
  .icon_arrow {
    pointer-events: none;
    position: absolute;
    right: 1px;
    top: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    padding-right: 11px;
    border-radius: 12px;
    height: calc(100% - 2px);

    span {
      background: #E0E0E0;
      font-size: 21px;
      border-radius: 4px;
    }
  }
  
  input, select {
    border: 1px solid  var(--gray);
    border-radius: 12px;
    font-weight: bold; 
    width: 100%; 
    outline: none;
    padding: var(--padding_input) var(--padding_input) var(--padding_input) var(--padding_input2);
    color: var(--gray2);

    &::-webkit-input-placeholder { 
      color: var(--gray);
    } 
  }

  select {
    cursor: pointer;
  }

`

const Dobleinput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 31px;
`

const Wrappercheckbox = styled.div`
  display: flex;
  align-items: center;
 
  input[type=checkbox] {
    appearance: none;
    outline: none;
    border: 1px solid var(--gray);
    border-radius: 4px;
    width: 21px;
    height: 21px;
    margin-right: 10px;
    transition: background 0.3s ease, border 0.3s ease;
    cursor: pointer;

    &:checked {
      background: var(--orange);
      border: 1px solid var(--orange);
    }
  }

`

const Wapperbutton = styled.div`

  button {
    background: var(--orange);
    padding: 17px 45px;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 12px;
    float: right;
    cursor: pointer;
    transition: opacity .3s ease;

    &:hover {
      opacity: .8;
    }
  }
`

const ContactInformation = () => {
  return ( 
    <>
      
      <Form onSubmit={ (e) => e.preventDefault()}>
        <Groupform> 
          <h2>Contact Information</h2>

          <div className="label_input">
            <Label htmlFor="email">E-mail</Label>
            <Wrapperinput>
              <div className="wraper_icon">
              <span className="material-icons">email</span>
              </div> 
              <input type="email" id="email" placeholder="Enter your email..."/>
            </Wrapperinput>
          </div>

          <div className="label_input">
            <Label htmlFor="phone">Phone</Label>
            <Wrapperinput>
              <div className="wraper_icon">
                <span className="material-icons">local_phone</span>
              </div> 
              <input type="number" id="phone" placeholder="Enter your phone..."/>
            </Wrapperinput>
          </div>

        </Groupform>
 
        <Groupform>
          <h2>Shipping address</h2>

          <div className="label_input">
            <Label htmlFor="name">Full name</Label>
            <Wrapperinput> 
              <div className="wraper_icon">
                <span className="material-icons">account_circle</span>
              </div>
              <input type="text" id="name" placeholder="Your name..."/>
            </Wrapperinput>
          </div>

          <div className="label_input">
            <Label htmlFor="address">Address</Label>
            <Wrapperinput>
                <div className="wraper_icon">
                  <span className="material-icons">home</span>
                </div>
                <input type="text" id="address" placeholder="Your address..."/>
            </Wrapperinput>
          </div>

          <div className="label_input">
            <Label htmlFor="city">City</Label>
            <Wrapperinput>
              <div className="wraper_icon">
                <span className="material-icons">location_city</span>
              </div> 
              <input type="text" id="city" placeholder="Your city..."/>
            </Wrapperinput>
          </div>

          <Dobleinput>
            <div className="label_input">
              <Label htmlFor="country">Country</Label>
              <Wrapperinput>
                <div className="wraper_icon">
                  <span className="material-icons">public</span>
                </div>
                <div className="icon_arrow">
                  <span className="material-icons">keyboard_arrow_down</span>
                </div>
                <select name="" id="country">
                  <option value="">Your contry...</option>
                  <option value="">Country 1</option>
                  <option value="">Country 2</option>
                  <option value="">Country 3</option>
                  <option value="">Country 4</option>
                  <option value="">Country 5</option>
                </select>
              </Wrapperinput>
            </div>
            <div className="label_input">
              <Label htmlFor="postalcode">Postal Code</Label>
              <Wrapperinput>
                <div className="wraper_icon">
                  <span className="material-icons">markunread_mailbox</span>
                </div>
                <input type="number" id="postalcode" placeholder="Your postal code..."/>
              </Wrapperinput>
            </div>
          </Dobleinput>

          <Wrappercheckbox>
            <input id="save" type="checkbox"/>
            <Label htmlFor="save">Save this information for next time</Label>
          </Wrappercheckbox>
          <Wapperbutton>
            <button type="submit">Continue</button>
          </Wapperbutton>
        </Groupform>

      </Form>
    </>
  );
}
 
export default ContactInformation;
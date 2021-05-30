import React, { Component } from "react";
import styled from "styled-components";
import Headline from "../common/Headline.js";
import Body from "../common/Body.js";
import ContainedButton from "../common/ContainedButton.js";

class Newsletter extends Component {
    render() {
        const Layout = styled.div`
            display: flex;
            width: 100vw;
            height: 455px;
            background-color: white;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            justify-self: center;
            margin-top: 50px;
        `;

        const FormEnd = styled.div`
            width: 570px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            justify-self: center;
        `;

        const TextField = styled.form`
            margin-top: 20px;
        `;
        const TextInput = styled.input`
            width: 570px;
            display: block;
            background-color: #f9f9f9;
            height: 44px;
            outline-style: none;
            border-color: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            justify-self: center;
        `;
        const InputLabel = styled.label``;
        return (
            <Layout>
                <Headline
                    content="Subscribe to Vega Newsletter"
                    color="black"
                    align="center"
                    place="center"
                />
                <Body
                    color="black"
                    content="By entering your email address you will always be up to date with the latest Vega news and promotions."
                    align="center"
                />
                <FormEnd>
                    <TextField action="#">
                        <label for="fname">First name:</label>
                        <TextInput
                            type="text"
                            id="fname"
                            name="fname"
                            value="John"
                        />
                    </TextField>
                    <ContainedButton text="white" content="Subscribe" />
                </FormEnd>
            </Layout>
        );
    }
}
export default Newsletter;

import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header/index';
import { Footer } from '../Footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { getNewResturant } from '../../store/actions/restaurantAction'
import { useHistory } from 'react-router-dom';


export const CreateNewRestaurant = () => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [website, setWebsite] = useState("");
    const [openingHours, setOpeningHours] = useState("");
    const [category, setCategory] = useState("")
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState();
    const [priceLevel, setPriceLevel] = useState("");
    const [country, setCountry] = useState();
    const [zip, setZip] = useState();
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");


    const [formState, setFormState] = useState({
        name: "",
        street: "",
        website: "",
        opening_hours: "",
        category: "",
        city: "",
        phone: "",
        price_level: "",
        country: "",
        zip: "",
        email: "",
        image: "",

    });


    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.all_restaurants);
    const history = useHistory();

    const dataNewResturant = {
        name: name,
        street: street,
        website: website,
        opening_hours: openingHours,
        category: category,
        city: city,
        phone: phone,
        price_level: priceLevel,
        country: country,
        zip: zip,
        email: email,
        image: image,
    }


    const inputChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }


    const hadleName = (e) => {
        setName(e.currentTarget.value)
    }

    const hadleStreet = (e) => {
        setStreet(e.currentTarget.value)
    }


    const hadleWebsite = (e) => {
        setWebsite(e.currentTarget.value)
    }


    const hadleopeningHours = (e) => {
        setOpeningHours(e.currentTarget.value)
    }

    const hadleCategory = (e) => {
        setCategory(e.currentTarget.value)
    }

    const hadleCity = (e) => {
        setCity(e.currentTarget.value)
    }

    const hadlePhone = (e) => {
        setPhone(e.currentTarget.value)
    }

    const hadlePriceLevel = (e) => {
        setPriceLevel(e.currentTarget.value)
    }

    const hadleCountry = (e) => {
        setCountry(e.currentTarget.value)
    }

    const hadleZip = (e) => {
        setZip(e.currentTarget.value)
    }

    const hadleEmail = (e) => {
        setEmail(e.currentTarget.value)
    }

    const hadleImage = (e) => {
        setImage(e.currentTarget.value)
    }

    const HadleNewResturant = () => {

        dispatch(getNewResturant(dataNewResturant));

        console.log("form state:", formState);
    }

    return (
        <>
            <Navbar />
            <Style.MainContainerFormNewRestaurant>
                <Style.DivCreateNewRestaurantText>
                    <Style.TextCreateNewRestaurant>CREATE NEW RESTAURANT</Style.TextCreateNewRestaurant>
                    <Style.Line></Style.Line>
                </Style.DivCreateNewRestaurantText>
                <Style.ContainerFormCreateNewRestaurant>
                    <Style.ContainerFormLeftSide>
                        <Style.FormLeftSide>
                            <Style.LabelName>Name *</Style.LabelName>
                            <Style.InputFieldName type="text" name="name" onChange={inputChangeHandler}></Style.InputFieldName>
                            <Style.LabelStreet>Street *</Style.LabelStreet>
                            <Style.InputFieldAddress type="text" name="street" onChange={inputChangeHandler}></Style.InputFieldAddress>
                            <Style.LabelWebsite>Website</Style.LabelWebsite>
                            <Style.InputFieldContact type="text" name="website" onChange={inputChangeHandler}></Style.InputFieldContact>
                            <Style.LabelOpeningHours>Opening Hours*</Style.LabelOpeningHours>
                            <Style.InputFieldDetails type="text" name="opening_hours" onChange={inputChangeHandler}></Style.InputFieldDetails>
                        </Style.FormLeftSide>
                    </Style.ContainerFormLeftSide>
                    <Style.ContainerFormCenter>
                        <Style.FormCenter>
                            <Style.LabelCategory>Category *</Style.LabelCategory>
                            <Style.InputFieldCategory type="dropdown" onChange={hadleCategory}></Style.InputFieldCategory>
                            <Style.LabelCity>City *</Style.LabelCity>
                            <Style.InputFieldCity type="text" onChange={hadleCity}></Style.InputFieldCity>
                            <Style.LabelPhone>Phone *</Style.LabelPhone>
                            <Style.InputFieldPhone type="text" onChange={hadlePhone}></Style.InputFieldPhone>
                            <Style.LabelPriceLevel>Price Level</Style.LabelPriceLevel>
                            <Style.InputFieldPriceLevel onChange={hadlePriceLevel}>
                                <Style.LevelPrice></Style.LevelPrice>
                                <Style.LevelPrice>1</Style.LevelPrice>
                                <Style.LevelPrice>2</Style.LevelPrice>
                                <Style.LevelPrice>3</Style.LevelPrice>
                            </Style.InputFieldPriceLevel>
                        </Style.FormCenter>
                        <Style.ContainerButtonSearch>
                            <Style.ButtonSerch onClick={HadleNewResturant}>Search</Style.ButtonSerch>
                        </Style.ContainerButtonSearch>
                    </Style.ContainerFormCenter>
                    <Style.ContainerFormRight>
                        <Style.FormRightSide>
                            <Style.LabelCountry>Country *</Style.LabelCountry>
                            <Style.InputFieldCounty onChange={hadleCountry}>
                                <Style.City></Style.City>
                                <Style.City>CH</Style.City>
                                <Style.City>IT</Style.City>
                                <Style.City>EN</Style.City>
                            </Style.InputFieldCounty>
                            <Style.LabelZip>Zip</Style.LabelZip>
                            <Style.InputZip type="text" onChange={hadleZip}></Style.InputZip>
                            <Style.LabelEmail>Email</Style.LabelEmail>
                            <Style.InputFieldEmail type="email" onChange={hadleEmail}></Style.InputFieldEmail>
                            <Style.LabelImage>Image</Style.LabelImage>
                            <Style.RestaurantImage type="file" onChange={hadleImage}></Style.RestaurantImage>
                        </Style.FormRightSide>
                    </Style.ContainerFormRight>
                </Style.ContainerFormCreateNewRestaurant>
            </Style.MainContainerFormNewRestaurant>
            <Footer />
        </>
    )

}
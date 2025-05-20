import React, { useEffect, useRef, useState } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import TextInput from '../components/TextInput';
import { TiWarningOutline } from "react-icons/ti";
import emailjs from '@emailjs/browser';
import AppFooter from '../components/AppFooter';

function ContactPage() {
    const [name, setName] = useState("");
    const [hasNameFormatError, setHasNameFormatError] = useState(false);
    const [email, setEmail] = useState("");
    const [hasEmailFormatError, setHasEmailFormatError] = useState(false);
    const [message, setMessage] = useState("");
    const [hasMessageFormatError, setHasMessageFormatError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const form = useRef(null);
    const initialFormElement = useRef(null);
    const finalFormElement = useRef(null);

    useEffect(() => {
        highlightNavButton("contact");
        backToTop();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const localIsValidNameFormat = isValidNameFormat(name);
        setHasNameFormatError(!localIsValidNameFormat);

        const localIsValidEmailFormat = isValidEmailFormat(email);
        setHasEmailFormatError(!localIsValidEmailFormat);

        const localIsValidMessageFormat = isValidMessageFormat(message);
        setHasMessageFormatError(!localIsValidMessageFormat);

        if(localIsValidNameFormat && localIsValidEmailFormat && localIsValidMessageFormat){
            sendEmail(e);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_hkw4tai", "template_ioh7jfi", form.current, {
                publicKey: "odl8vozE-fHv9Jiw7",
            })
            .then(
                () => {
                    setMessageSent(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const updateName = (name) => {
        if(hasNameFormatError && isValidNameFormat(name)){
            setHasNameFormatError(false);
        }

        setName(name);
    }

    const isValidNameFormat = (name) => {
        return name.length > 0;
    };

    const updateEmail = (email) => {
        if(hasEmailFormatError && isValidEmailFormat(email)){
            setHasEmailFormatError(false);
        }

        setEmail(email);
    }

    const isValidEmailFormat = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
    };

    const updateMessage = (message) => {
        if(hasMessageFormatError && isValidMessageFormat(message)){
            setHasMessageFormatError(false);
        }

        setMessage(message);
    }

    const isValidMessageFormat = (message) => {
        return message.length > 0;
    };

    const focusOnInitial = async () => {
        focusOn(initialFormElement);
    }

    const focusOnFinal = async () => {
        focusOn(finalFormElement);
    }

    const focusOn = async (element) => {
        if(element?.current?.type === "text" || element?.current?.type === "password"){
            element?.current?.select();
        } else {
            element?.current?.focus();
        }
    }

    return (
        <div id="contact-page" className="page">
            <div className="contact-header">
                <div className="contact-header-text">
                    Contact
                </div>
                <div className="contact-header-underline" />
            </div>
            <div className="contact-subheader">
                Have any questions, or possibly want to work together? Just leave me a quick message, and I'll get back to you as soon as possible.
            </div>
            {messageSent ? (
                <div className="contact-success-container">
                    <img className="contact-success-icon" src={require("../images/contact-success-icon.png")} alt="checkmark inside of a circle" />
                    <div className="contact-success-text">
                        Message sent!
                    </div>
                    <button className="contact-success-new-message-button" onClick={(e) => {e.preventDefault(); setMessageSent(false); }}>
                        New Message
                    </button>
                </div>
            ) : (
                <form className="contact-form" ref={form} onSubmit={e => onSubmit(e)}>
                    <div className="focus-guard" tabIndex="1" onFocus={() => focusOnFinal()} />
                    <fieldset className="contact-fieldset">
                        <TextInput tabIndex="2" id="name" name={"name"} inputRef={initialFormElement} title={"NAME"} value={name} onChange={e => updateName(e.target.value)} onEnter={e => onSubmit(e)} isErrored={hasNameFormatError}/>
                        {hasNameFormatError && (
                            <div className="input-warning">
                                <TiWarningOutline className="input-warning-icon"/>
                                <span className="input-warning-text">Please enter your name.</span>
                            </div>
                        )}
                        <TextInput tabIndex="3" id="email" name={"email"} title={"EMAIL"} value={email} onChange={e => updateEmail(e.target.value)} onEnter={e => onSubmit(e)} isErrored={hasEmailFormatError}/>
                        {hasEmailFormatError && (
                            <div className="input-warning">
                                <TiWarningOutline className="input-warning-icon"/>
                                <span className="input-warning-text">Hmm, this email address doesn't look right.</span>
                            </div>
                        )}
                        <TextInput tabIndex="4" id="message" name={"message"} title={"MESSAGE"} value={message} onChange={e => updateMessage(e.target.value)} onEnter={e => onSubmit(e)} isErrored={hasMessageFormatError} isTextArea={true}/>
                        {hasMessageFormatError && (
                            <div className="input-warning">
                                <TiWarningOutline className="input-warning-icon"/>
                                <span className="input-warning-text">Please enter a message.</span>
                            </div>
                        )}
                    </fieldset>
                    <div className="contact-submit-button-container">
                        <button tabIndex="5" className="contact-submit-button" type="submit" ref={finalFormElement}>
                            <div className="contact-submit-button-content">
                                <div className="contact-submit-button-text">SUBMIT</div>
                            </div>
                        </button>
                    </div>
                    <div className="focus-guard" tabIndex="6" onFocus={() => focusOnInitial()} />
                </form>
            )}
            <AppFooter />
        </div>
    );
}

export default ContactPage;
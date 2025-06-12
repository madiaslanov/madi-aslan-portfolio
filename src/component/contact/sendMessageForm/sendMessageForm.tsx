import style from "./sendMessageForm.module.css"
import {useForm} from "react-hook-form";

const SendMessageForm = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (values: any) => {
        console.log(values);
    }

    return (
        <div>
            <form className={style.formHolder} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.inputMin1}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='ENTER YOUR NAME*'/>
                </div>
                <div className={style.inputMin2}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='ENTER YOUR EMAIL*'/>
                </div>
                <div className={style.inputMin3}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='PHONE NUMBER'/>
                </div>
                <div className={style.inputBig1}>
                    <img src="/rectan/big-lf.svg" alt=""/>
                    <img src="/rectan/big-bt.svg" alt=""/>
                    <input type="text" placeholder='YOUR MESSAGE*'/>
                </div>

                <div className={style.submitBtn}>
                    <img src="/rectan/btn.svg" alt=""/>
                    <button>
                        SUBMIT
                    </button>
                    <img src="/rectan/btn.svg" alt=""/>
                </div>
            </form>
        </div>
    );
};

export default SendMessageForm;
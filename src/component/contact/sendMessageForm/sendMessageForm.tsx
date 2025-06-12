import style from "./sendMessageForm.module.css"
import {useForm} from "react-hook-form";

interface IProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const SendMessageForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<IProps>();

    const onSubmit = (values: IProps) => {
        console.log(values);
    }

    return (
        <div>
            <form className={style.formHolder} onSubmit={handleSubmit(onSubmit)}>

                <div className={style.inputMin1}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='ENTER YOUR NAME*' {...register("name", { required: "Name is required" })}/>
                    {errors.name && <p className={style.error}>{errors.name.message}</p>}
                </div>
                <div className={style.inputMin2}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='ENTER YOUR EMAIL*' {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Invalid email format",
                        },
                    })} />
                    {errors.email && <p className={style.error}>{errors.email.message}</p>}
                </div>
                <div className={style.inputMin3}>
                    <img src="/rectan/min-lf.svg" alt=""/>
                    <img src="/rectan/min-bt.svg" alt=""/>
                    <input type="text" placeholder='PHONE NUMBER' {...register("phone", { required: "Phone is required" })}/>
                    {errors.phone  && <p className={style.error}>{errors.phone.message}</p>}
                </div>
                <div className={style.inputBig1}>
                    <img src="/rectan/big-lf.svg" alt=""/>
                    <img src="/rectan/big-bt.svg" alt=""/>
                    <input type="text" placeholder='YOUR MESSAGE*' {...register("message", { required: "Message is required" })}/>
                    {errors.message && <p className={style.error}>{errors.message.message}</p>}
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
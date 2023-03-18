import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Person2Icon from '@mui/icons-material/Person2';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Page from '@/components/page';
import styles from '@/styles/index.module.scss';

export default function Index() {

    const [visible, setView] = useState(false);
    const [val, setVal] = useState({
        user: '',
        pass: ''
    });

    function InputVal(element: ChangeEvent<HTMLInputElement>){
        const params = element.target;
        setVal({...val, [params.id]: params.value});
    }

    return (
        <Page title="Home - Login" description="Simple login page">
            <main className={styles.container}>
                <form className={styles.form}>
                    <Image className={styles.icon} src="/favicon.ico" width={70} height={70} alt="logo"/>

                    <h1 className={styles.header}>log in</h1>

                    <div className={styles.div}>
                        <input className={styles.input} type="text" value={val.user} id="user" onChange={(element) => InputVal(element)} placeholder=" "/>
                        <label className={styles.label} htmlFor="user"><Person2Icon/> Username</label>
                        <hr className={styles.line}/>
                    </div>
                    <div className={styles.div}>
                        <input className={styles.input} type={visible ? 'text' : 'password'} value={val.pass} id="pass" onChange={(element) => InputVal(element)} placeholder=" "/>

                        {visible ? 
                            <VisibilityIcon className={styles.view_icon} onClick={() => setView(false)}/> :
                            <VisibilityOffIcon className={styles.view_icon} onClick={() => setView(true)}/>
                        }

                        <label className={styles.label} htmlFor="pass"><LockIcon/> Password</label>
                        <hr className={styles.line}/>
                    </div>
                </form>
            </main>
        </Page>
    );
}

import React from 'react';
import classes from '../components/tables/TableRow.module.css';
import styles from '../styles/Result.module.css'
import {useNavigate, useLocation} from 'react-router-dom'
import ResultTable from '../components/tables/ResultTable'
import Header from '../components/UI/header/Header';
import Button from '../components/UI/button/Button';

const Result = () => {  
    const location = useLocation();
    const navigate = useNavigate();

    const goToAccount = () => {
        navigate("/account");
    }

    return (
        <div>
            <Header></Header>
            <div className={styles.content}>
                <div>Results of cost assessment by SCAApp</div>
                <div className={styles.name}>{location.state.name}</div>
                <div className={classes.table}>
                    <ResultTable data={location.state}></ResultTable>
                </div>
                <div className={styles.btn_block}>
                    <Button className={styles.acc_btn} onClick={goToAccount}>GO TO ACCOUNT</Button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Result;
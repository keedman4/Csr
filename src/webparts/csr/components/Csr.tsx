import * as React from 'react';
import styles from './Csr.module.scss';
import { ICsrProps } from './ICsrProps';
import { escape } from '@microsoft/sp-lodash-subset';


import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import * as jQuery from "jquery";
import * as $ from 'jquery';

export default class Csr extends React.Component<ICsrProps, any> {

  public constructor(props: ICsrProps, any) {
    super(props);

  }


  public render() {

    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");
    
    return (


<div className={styles.alertNews}>
        {/* <div className={ styles.container }> */}  
        {/* <div className={ styles.row }> */}
        {/* <div className={ styles.column }> */}
        {/*className={ styles.title }*/}
        
        {/* <div  className={styles.alertNews}> */}
        <div className={styles.csrhead}>Customer Satisfaction Rating </div>
        
                        <div  className={styles.cardOutline}>
                            <div className={styles.ratingsOutline}>
                                <span className={styles.head}><b>Investments</b></span> 
                                <h1>{escape(this.props.investments.toString())} {'%'}  <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                                </div>
                            <div className={styles.ratingsOutline}>
                            <span className={styles.head}><b>Insurance</b></span>
                                <h1>{escape(this.props.insurance.toString())}{'%'} <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                            </div>
                            <div className={styles.ratings}>
                              {/* <div className={styles.ratingsOutline}> */}
                              <span className={styles.head}><b>Health</b></span>
                                <h1>{escape(this.props.health.toString())}{'%'} <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                            </div>
                            as at {escape(this.props.selectdate.displayValue)}
                            </div>

                            <br></br>
                            
                                <div  className={styles.cardOutline}>
                                <div className={styles.cust}>
                                    <h1 className="float-left"><b>
                                      {escape(this.props.newCustomerCount.toString())}</b><span className={styles.ncc}>New Customer Count</span></h1>
                                    {/* <h3 >New Customer Count </h3> */}
                                    </div>
                                    {/* <div className={style.custs}>
                                    
                                    </div> */}
                                    <div className={styles.custsx}>
                                    <h1 className={styles.icons}><ArrowDropDownIcon fontSize="small" /></h1>
                                    </div>
                                    </div>
               </div>
         
      // </div>
    );
  }
}

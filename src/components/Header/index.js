import style from './index.module.css'
import {CloseOutline} from 'antd-mobile-icons'
import logo from '../../assets/twitter.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>(
   <div className={style.header}>
         <CloseOutline className={style.closeIcon}/>
         <img className={style.twitterLogo} src={logo} alt="twitter-logo"/>
      </div>
)
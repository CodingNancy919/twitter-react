import datepicker from '../../assets/datepicker-icon.svg'

import style from './index.module.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
   <div className={style.birthdayInput}>
   <div className={style.birthdayTitleItem} >出生日期</div>
   <div>
      <span className={style.birthdayPlaceHolder}>年/月/日</span>
      <img className={style.datepickerIcon} src={datepicker} alt="datepicker"/>
   </div>
</div>
);
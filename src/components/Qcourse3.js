import"../components/Qcourse3.css"
import pic from "../image/278.jpg";
function Qcourse3() {
  return (
    <div dir="rtl" className="container-explanation2">
      <h1>چگونه از JSX در React استفاده می شود؟</h1>
      <div className="jsx-explation">
        <p>
          🎯 JSX (JavaScript XML) یک پسوند نحوی است که در React برای تعریف
          ساختار و ترکیب اجزای UI استفاده می شود. این یک راه راحت و شهودی برای
          نوشتن کدهای HTML مانند مستقیماً در جاوا اسکریپت ارائه می دهد.
        </p>
        <div className="container-img-info-Qcourse3">
          <img src={pic} className="img-info-Qcourse3"></img>
        </div>
      </div>
      <div className="txt-enother-Qcourse3">
        <p>
          تبدیل Babel: کد JSX توسط Babel (یک کامپایلر جاوا اسکریپت) به کد جاوا
          اسکریپت معمولی تبدیل می شود که React می تواند آن را درک کند. این تبدیل
          شامل تبدیل تگ های JSX به فراخوانی تابع (عناصر React) و اطمینان از
          سازگاری با محیط های مختلف جاوا اسکریپت است.
        </p>
      </div>
    </div>
  );
}
export default Qcourse3;

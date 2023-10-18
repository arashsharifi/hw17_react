import "../components/Qcourse4.css";
import func from "../image/276.jpg";
import cla from "../image/2788.jpg";
import hook from "../image/280.jpg";
function Qcourse4() {
  return (
    <div className="container-explanation3">
      <p>
        📦 در React، کامپوننت ها بلوک های سازنده رابط کاربری هستند. آنها تکه‌های
        کد مستقل و قابل استفاده مجدد هستند که رابط کاربری و رفتار آن را در بر
        می‌گیرند. کامپوننت ها در React را می توان به دو نوع اصلی طبقه بندی کرد:
        کامپوننت های تابعی و اجزای کلاس.
      </p>
      <div className="components-exp">
        <div className="class-Components">
          <p>
            اFunctional Components: اجزای تابعی به عنوان توابع جاوا اسکریپت
            تعریف می شوند. آنها props (مخفف خواص) را به عنوان ورودی دریافت می
            کنند و JSX (یا تهی) را به عنوان خروجی خود برمی گردانند. اجزای
            عملکردی ساده تر و قابل درک تر هستند. در اینجا یک مثال است:
          </p>
          <img className="info-func" src={func}></img>
        </div>
        <div className="functional-components">
          <p>
            Class Components: ویژگی‌های کلاس ES6: با معرفی ویژگی‌های کلاس ES6،
            می‌توانید اجزای کلاس را با استفاده از یک نحو ساده‌تر بدون گسترش صریح
            React.Component یا تعریف سازنده ایجاد کنید. در اینجا یک مثال است:
          </p>
          <img className="info-cla" src={cla}></img>
        </div>
      </div>
      <div className="components-exp-hook">
        <p>
          React Hooks (فقط اجزای عملکردی): React Hookها توابعی هستند که به شما
          امکان می دهند از حالت و سایر ویژگی های React در اجزای عملکردی استفاده
          کنید. آنها یک راه جایگزین برای مدیریت حالت و چرخه حیات در اجزای
          عملکردی ارائه می دهند. نمونه هایی از React Hook ها عبارتند از
          useState، useEffect و useContext.
        </p>
        <div className="continer-info-hook">
          <img className="info-hook" src={hook}></img>
        </div>
      </div>
    </div>
  );
}
export default Qcourse4;

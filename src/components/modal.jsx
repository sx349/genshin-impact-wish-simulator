import React from "react";

export default function Modal(props) {
  const { hideModal } = props;
  return (
    <div onClick={hideModal} className="modal-container">
      <div
        className="disclaimer-modal m-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="disclaimer-modal-content p-2">
          <div onClick={hideModal} className="close-button"></div>
          <h2>作者声明</h2>
		  <p>
		    原作者@uzair-ashraf
			</p>
          <p>
          本人与米哈游无利益关系，本项目全部资料均来自第三方网站或游戏内截图。
          </p>
          <p>
            若米哈游或其利益相关方希望中止本项目，请<a href="mailto:uzinatorcl@gmail.com">邮件联系</a>我，我将立刻下线项目。
          </p>
          <p>
            本项目源代码均存储在
            <a
              href="https://github.com/uzair-ashraf/genshin-impact-wish-simulator"
              target="_blank"
            >
              这里
            </a>
			，若你喜欢本项目，请给本项目加一个颗星！
			</p>
          <p>
          （译注：或者点击下面的图标给原作者买杯咖啡！）
          </p>
          <p>
            所有商品名称、图标和商标的知识产权均归属于其在美国和/或其它国家的相应知识产权所属方。
          </p>
          <a href="https://ko-fi.com/A0A569N3L" target="_blank">
            <img
              height="40"
              className="my-2"
              style={{ border: "0px", height: "40px" }}
              src="https://cdn.ko-fi.com/cdn/kofi1.png?v=3"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
		  <p>
		  中文翻译@sx349
		  </p>
          <p>
          本人独立完成了本项目的中文翻译工作，与米哈游、原作者均无利益关系。
		  </p>
          <p>
          若米哈游或其利益相关方希望中止本项目，请<a href="mailto:wssx349@gmail.com">邮件联系</a>我，我将立刻下线项目。
		  </p>
        </div>
      </div>
    </div>
  );
}

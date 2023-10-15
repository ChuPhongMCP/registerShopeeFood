import React, { useCallback, useState } from "react";

function Question(props) {
  const { items } = props;
  
  const [questions, setQuestions] = useState(items);

  const toggle_frame_question = useCallback(
    (event, index) => {
      event.stopPropagation();
      const updatedQuestions = [...questions];
      updatedQuestions[index].isExtend = !updatedQuestions[index].isExtend;
      setQuestions(updatedQuestions);
    },
    [questions]
  );

  return (
    <>
      <div className="cover_cauhoi">
        <div className="cauhoi_title">CÂU HỎI THƯỜNG GẶP</div>

        <div className="cauhoi_decorection">
          <img src={require("assets/decorection/decorection2.PNG")} alt="..." />
        </div>

        <div className="hang_cauhoi">
          <div className="container">
            <div className="row">
              {questions.map((item, index) => {
                return (
                  <div
                    key={item.num}
                    className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
                  >
                    <div className="cover_noidung_cauhoi">
                      <div className="cover_cauhoi_traloi">
                        <span
                          className={item.isExtend ? "cauhoi_extend" : "cauhoi"}
                        >
                          {item.title}
                        </span>

                        <span
                          className={item.isExtend ? "traloi_extend" : "traloi"}
                        >
                          {item.content}
                        </span>
                      </div>

                      <div className="cover_toggle_icon">
                        <img
                          src={require("assets/cauhoi/toggle_icon.png")}
                          onClick={(event) =>
                            toggle_frame_question(event, index)
                          }
                          className={
                            item.isExtend
                              ? "img_toggle_icon_isExtend"
                              : "img_toggle_icon"
                          }
                          width={"25px"}
                          height={"25px"}
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;

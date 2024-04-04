let data;
let _id = 0;
let mobileStyle = false;

const createInput = (id, tgt) => {
  if (document.getElementById("ioa" + tgt) == null) {
    const ioa = document.createElement("div");
    ioa.id = "ioa" + tgt;
    ioa.classList = "input-area";
    ioa.innerHTML = `<div class=" avatar">
                      <img id="user-img" alt="username" src="${data.currentUser.image.png}" />
                    </div>
                    <textarea id="io${id}" class="editable" placeholder="Add a comment..."></textarea>
                    <button id="snd${id}">SEND</button>`;
    const tgtEl = document.getElementById(tgt);
    tgtEl.appendChild(ioa);
    ioa.focus();
    return ioa;
  } else {
    document.getElementById("ioa" + tgt).remove();
  }
};

const createCard = (id, obj, cont) => {
  let card = document.createElement("div");
  card.id = id + "-wrap";
  card.classList = "card-wrapper";
  card.innerHTML = `<div id="${id}" class=" card ">
                        <div class=" card-content">
                          ${
                            mobileStyle === false ? 
                              `<div class=" vote-section ">
                                <div id="${
                                  "plus-" + id
                                }" onclick="plusScore('${id}')">
                                  <img alt="plus" src="./images/icon-plus.svg" />
                                </div>  
                                <p id="score-${id}">${obj.score}</p>
                                <div id="${
                                  "minus-" + id
                                }" onclick="minusScore('${id}')">
                                  <img alt="minus" src="./images/icon-minus.svg" />
                                </div>  
                              </div>` : ''
                          }
                          <div class=" card-body">
                            <div class=" card-header">
                              <div class=" user-detail ">
                                <div class=" avatar"><img alt="username" src="${
                                  obj.user.image.png
                                }" /></div>
                                <p id="name-${id}">${obj.user.username}</p>
                                <p id="date-${id}">${obj.createdAt}</p>
                              </div>
                             ${
                               mobileStyle === false ? data.currentUser.username == obj.user.username
                                                        ? `<div class="options">
                                                          <div class="delete" onclick="del(${obj.id},'${id}');">
                                                            Delete
                                                          </div>
                                                          <div class="edit" onclick="edit('${obj.id}','${id}');">
                                                            Edit
                                                          </div>
                                                        </div> `
                                                        : `<div class="reply" onclick="reply('${obj.id}','${id}','${obj.user.username}','${cont}');">
                                                            Reply
                                                        </div>` 
                                                      : ''
                             }
                            </div>
                              <div id="text-${id}" class=" card-text ">
                              ${
                                obj.replyingTo
                                  ? `<p id="tag-${id}" contenteditable="false">@` +
                                    obj.replyingTo +
                                    "</p>"
                                  : ""
                              } ${obj.content}
                              </div>
                            ${ mobileStyle == true ?
                              ` <div class= "card-footer">
                                    <div class=" vote-section ">
                                      <div id="${
                                        "plus-" + id
                                      }" onclick="plusScore('${id}')">
                                        <img alt="plus" src="./images/icon-plus.svg" />
                                      </div>  
                                      <p id="score-${id}">${obj.score}</p>
                                      <div id="${
                                        "minus-" + id
                                      }" onclick="minusScore('${id}')">
                                        <img alt="minus" src="./images/icon-minus.svg" />
                                      </div>  
                                    </div>
                                    ${
                                      data.currentUser.username == obj.user.username
                                                        ? `<div class="options">
                                                          <div class="delete" onclick="del(${obj.id},'${id}');">
                                                            Delete
                                                          </div>
                                                          <div class="edit" onclick="edit('${obj.id}','${id}');">
                                                            Edit
                                                          </div>
                                                        </div> `
                                                        : `<div class="reply" onclick="reply('${obj.id}','${id}','${obj.user.username}','${cont}');">
                                                            Reply
                                                        </div>` 
                                    }
                                </div>  ` : ''
                            }
                            </div>
                          </div>
                        </div>
                      </div>`;

  return card;
};

const del = (eid, rid) => {
  const modal = document.createElement("div");
  modal.innerHTML = `<div class="modal-wrapper">
                      <div class="modal">
                        <h2>Delete Comment</h2>
                        <p>Are you sure you want to delete this comment? This will remove comment and can't be undone.</p>
                        <div class="bt-section"> 
                          <button id="bt-no" >NO, CANCEL</button> 
                          <button id="bt-yes">YES, DELETE</button> 
                        </div>
                      </div>
                    </div>`;
  const body = document.getElementById("body");
  body.appendChild(modal);
  const btNo = document.getElementById("bt-no");
  const btYes = document.getElementById("bt-yes");
  btNo.addEventListener("click", (e) => {
    modal.remove();
  });
  btYes.addEventListener("click", (e) => {
    console.log(rid);
    document.getElementById(rid).remove();
    modal.remove();
  });
};

const updateComment = (targetId, newComment) => {
  let targetComment = data.comments.find(
    (comment) => comment.id.toString() === targetId
  );
  if (targetComment) {
    targetComment.content = newComment;
    return;
  }
  data.comments.forEach((comment) => {
    let targetReply = comment.replies.find(
      (reply) => reply.id.toString() === targetId
    );
    if (targetReply) {
      targetReply.content = newComment;
      return;
    }
  });
};

const edit = (id, el) => {
  if (document.getElementById("upt-" + el) == null) {
    let curr = data.comments.find((i) => i.id === id);

    // if(curr){
    //   curr.content = "";
    // }
    console.log(id);
    const card = document.getElementById(el);
    const txt = document.getElementById(`text-${el}`);
    const tag = document.getElementById("tag-" + el);
    tag.classList.add("hidden");
    txt.contentEditable = true;
    txt.classList.add("editable");
    const upt = document.createElement("button");
    upt.id = "upt-" + el;
    upt.innerHTML = "UPDATE";
    card.appendChild(upt);
    upt.addEventListener("click", () => {
      let newComment = txt.innerText;
      console.log(newComment);
      updateComment(id, newComment);
      txt.contentEditable = false;
      tag.classList.remove("hidden");
      txt.classList.remove("editable");
      document.getElementById("upt-" + el).remove();
      console.log(data);
    });
  } else {
    const txt = document.getElementById(`text-${el}`);
    const tag = document.getElementById("tag-" + el);
    txt.contentEditable = false;
    tag.classList.remove("hidden");
    txt.classList.remove("editable");
    document.getElementById("upt-" + el).remove();
  }
};

const reply = (id, tid, replyingTo, cont) => {
  console.log(tid);
  let ioa = createInput(id, tid + "-wrap");
  if (ioa != null) {
    let userSnd = document.getElementById("snd" + id);
    let usertxt = document.getElementById("io" + id);
    let frame = document.getElementById(cont);
    if (frame == null) {
      frame = document.createElement("div");
      frame.classList.add("rep-section");
      frame.id = cont;
      document.getElementById(id + "-wrap").appendChild(frame);
    }
    usertxt.addEventListener("input", (event) => {
      usertxt.textContent = event.target.value;
    });
    userSnd.addEventListener("click", (e) => {
      let obj = {
        id: _id + 1,
        content: usertxt.textContent,
        createdAt: "0 minutes ago",
        score: 0,
        replyingTo: replyingTo,
        user: {
          image: {
            png: data.currentUser.image.png,
            webp: data.currentUser.image.webp,
          },
          username: data.currentUser.username,
        },
      };
      let card = createCard(_id + 1, obj);
      frame.appendChild(card);
      data.commentappend;
      const comment = data.comments.find(
        (c) => c.id.toString() === cont.replace(/[a-zA-Z]/g, "")
      );
      if (comment) {
        comment.replies.push(obj);
      } else {
        console.log("error id not found");
      }
      console.log(data);
      _id += 1;
      ioa.remove();
    });
  }
};
const updateScore = (targetId, newScore) => {
  let targetComment = data.comments.find(
    (comment) => comment.id.toString() === targetId
  );
  if (targetComment) {
    targetComment.score = newScore;
    return;
  }
  data.comments.forEach((comment) => {
    let targetReply = comment.replies.find(
      (reply) => reply.id.toString() === targetId
    );
    if (targetReply) {
      targetReply.score = newScore;
      return;
    }
  });
};
const plusScore = (id) => {
  const newScore =
    Number.parseInt(
      document
        .getElementById("score-" + id)
        .textContent.replace(/[a-zA-Z]/g, "")
    ) + 1;
  document.getElementById("score-" + id).textContent = newScore;
  updateScore(id.replace(/[a-zA-Z]/g, ""), newScore);
};

const minusScore = (id) => {
  const newScore =
    Number.parseInt(document.getElementById("score-" + id).textContent) - 1;
  document.getElementById("score-" + id).textContent = newScore;
  updateScore(id.replace(/[a-zA-Z]/g, ""), newScore);
};

const loadComment = () => {
  const frame = document.getElementById("comment-list");
  console.log(data);
  data.comments.map((el, i) => {
    let card = createCard(el.id, el, "rep" + el.id);
    _id += 1;
    // newDiv.innerHTML += content;

    if (el.replies.length > 0) {
      _id += 1;
      let repFrame = document.createElement("div");
      // const repFrame = document.getElementById(`rep${el.id}`);
      repFrame.id = "rep" + el.id;
      console.log(repFrame.id);
      repFrame.classList = "rep-section";
      el.replies.map((rl, id) => {
        let cardr = createCard("r" + rl.id, rl, "rep" + el.id);
        // cardr.innerHTML = `<div id="r${rl.id}" class=" card ">
        //                       <div class=" card-content">
        //                         <div class=" vote-section ">
        //                           <img alt="plus" src="./images/icon-plus.svg" />
        //                           <p>${rl.score}</p>
        //                           <img alt="minus" src="./images/icon-minus.svg" />
        //                         </div>
        //                         <div class=" card-body">
        //                           <div class=" card-header">
        //                             <div class=" user-detail ">
        //                               <div class=" avatar"><img alt="username" src="${rl.user.image.png}" /></div>
        //                               <p id="name-r${rl.id}">${rl.user.username}</p>
        //                               <p id="date-r${rl.id}">${rl.createdAt}</p>
        //                             </div>
        //                             ${data.currentUser.username == rl.user.username ?
        //                                 `<div class="options">
        //                                 <div class="delete" onclick="del(${rl.id},'r${rl.id}');">
        //                                   Delete
        //                                 </div>
        //                                 <div class="edit" onclick="edit(${rl.id},'r${rl.id}');">
        //                                   Edit
        //                                 </div>
        //                               </div> `
        //                               :
        //                               `<div class="reply" onclick="reply(${rl.id},'r${rl.id}','${rl.replyingTo}');">
        //                               Reply
        //                             </div>`}
        //                           </div>
        //                           <div id="text-r${rl.id}" class=" card-text ">
        //                           <p>@${rl.replyingTo}</p> ${rl.content}
        //                           </div>
        //                         </div>
        //                       </div>
        //                   </div>`;
        repFrame.appendChild(cardr);
      });
      card.appendChild(repFrame);
    }
    frame.appendChild(card);
  });
};

const initInput = () => {
  createInput("00", "c-section");
  let userSnd = document.getElementById("snd00");
  let usertxt = document.getElementById("io00");
  const frame = document.getElementById("comment-list");
  usertxt.addEventListener("input", (event) => {
    usertxt.textContent = event.target.value;
  });
  userSnd.addEventListener("click", (e) => {
    let obj = {
      id: _id + 1,
      content: usertxt.textContent,
      createdAt: "0 minutes ago",
      score: 0,
      user: {
        image: {
          png: data.currentUser.image.png,
          webp: data.currentUser.image.webp,
        },
        username: data.currentUser.username,
      },
      replies: [],
    };
    let card = createCard(_id + 1, obj);
    frame.appendChild(card);

    data.comments.push(obj);
    console.log(data.comments);
    _id += 1;
  });
};

function handleMediaChange(e) {
  const frame = document.getElementById("comment-list");
  frame.innerHTML='';
  if (e.matches) {
    mobileStyle = true;
  } else {
    mobileStyle = false;
  }
  loadComment();
}

window.onload = () => {
  data = {
    currentUser: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    comments: [
      {
        id: 1,
        content:
          "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        createdAt: "1 month ago",
        score: 12,
        user: {
          image: {
            png: "./images/avatars/image-amyrobson.png",
            webp: "./images/avatars/image-amyrobson.webp",
          },
          username: "amyrobson",
        },
        replies: [],
      },
      {
        id: 2,
        content:
          "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        createdAt: "2 weeks ago",
        score: 5,
        user: {
          image: {
            png: "./images/avatars/image-maxblagun.png",
            webp: "./images/avatars/image-maxblagun.webp",
          },
          username: "maxblagun",
        },
        replies: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: {
                png: "./images/avatars/image-ramsesmiron.png",
                webp: "./images/avatars/image-ramsesmiron.webp",
              },
              username: "ramsesmiron",
            },
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: {
                png: "./images/avatars/image-juliusomo.png",
                webp: "./images/avatars/image-juliusomo.webp",
              },
              username: "juliusomo",
            },
          },
        ],
      },
    ],
  };
  const mql = window.matchMedia('(max-width: 375.999px)');
  mql.addEventListener('change', handleMediaChange);
  handleMediaChange(mql);
  
  initInput();
  // data.comments.
};

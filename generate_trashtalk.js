// 隨機語句
function randomindex(array) {
  return index = Math.floor(Math.random() * array.length)
}

function generateTrashTalk(options) {
  // 定義隨機幹話資料
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // if (Object.keys(options).length > 1) {
  //   return `只能選一個`
  // }

  // 根據誰選的篩選出專屬 task 
  let collection = []
  let target = ''

  if (options.jobs === 'engineer') {
    collection = task.engineer
    target = '工程師'
  } else if (options.jobs === 'designer') {
    collection = task.designer
    target = '設計師'
  } else if (options.jobs === 'entrepreneur') {
    collection = task.entrepreneur
    target = '創業家'
  } else {
    return `請選擇一個`
  }

  // 產出幹話 start generating trashTalk  
  let trashTalk = `身為一個${target}，${collection[randomindex(collection)]}，${phrase[randomindex(phrase)]}吧!`

  // return trashTalk
  return trashTalk
}

// export generateTrashTalk function for other files to use
module.exports = generateTrashTalk


{
 "item.topicId || item.boardId || item.id || ''"  
}


{
  let result = '';
  if (item.topicId) {
    result = item.topicId;
  } else if (item.boardId) {
    result = item.boardId;
  } else if (item.id) {
    result = item.id;
  } else {
    result = '';
  }
  console.log(result);
}


{
  [item.topicId, item.boardId, item.item.id].find(Boolean) ?? ''
}



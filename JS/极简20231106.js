item.boardName || item.topicName || item.name



{
  function getItemName(item) {
    const { brandName, topicName, name } = item;
    return brandName || topicName || name;
  }
}





{
  function getFirstNonEmptyValue(...values) {
    return values.find(value => Boolean(value)) || "";
  }

  function getItemName(item) {
    const { brandName, topicName, name } = item;
    return getFirstNonEmptyValue(brandName, topicName, name);
  }
}




{
  function getFirstNonEmptyValue(...values) {
    return values.find(value => Boolean(value)) || "";
  }

  function getPropertyFromItem(item, properities) {
    return getFirstNonEmptyValue(...properities.map(prop=>item[prop]));
  }

  function getItemName(item) {
    const properities = ['boardName', 'topicName', 'name']
    return getPropertyFromItem(item, properities);
  }
}


changeSelect(value){
  // 多选时，有个数限制
  if(this.isMultiple){
    if (value.length > this.selectSize) {
    value.pop();
    }
  }
  this.$emit('input',value);
}


{
  function fnChangeSelect(value, isMultiple, selectSize, emitInput) {
    if(isMultiple && value.length > selectSize ){
      value.pop();
    }
    emitInput(value);
  }
  fnChangeSelect(value, this.isMultiple, this.selectSize, (v)=>{
    this.$meit('input', v)
  })
}


{
  function removeExcessValues(value, maxCount) {
    if(value.length > maxCount) {
      value.pop();
    }
    return value;
  }

  function emitInputChange(value, emitInput) {
    emitInput(value);
  }

  function fnChangeSelect(value, isMultiple, selectSize, emitInput) {
    if(isMultiple) {
      value = removeExcessValues(value, selectSize);  
    }
    emitInputChange(value, emitInput);
  }

   fnChangeSelect(value, this.isMultiple, this.selectSize, (v)=>{
    this.$meit('input', v)
  })
  
}






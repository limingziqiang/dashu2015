/**
 *   中划线转换小驼峰
 *   
 *   @since 1.0
 *   @param {string} variable
 *   @returns {string}
 *   @examle
 *
 *   toCamelCaseVar('get_account_list');
 *   // => getAccountList
 *
 */
 
 function toCamelCaseVar (variable) {
    return variable.replace(/_+[a-zA-Z]/g, function(str, index){
      return index ? str.substr(-1).toUpperCase() : str;
    });
 }

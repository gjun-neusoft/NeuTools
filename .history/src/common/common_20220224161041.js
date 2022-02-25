/**
 * 字符串加密/脱敏方法
 * @param {加密字符串，必填项} string 
 * @param {头部加密字符个数，默认值 ：0} start 
 * @param {末尾加密字符个数，默认值 ：字符串长度} end 
 * @param {加密替换字符， 默认值 ：'*''} str 
 * @returns 
 */
const stringEncryption = (string, start = 0, end = string.length, str = '*') => {
    let start_str = '',
        mid_str = '',
        end_str = '',
        ret = '';
    if (string.length < start || string.length < end || string.length < (start + end)) {
        ret = '字符串长度小于加密长度'
        return ret
    }
    for (let i = 0; i < start; i++) {
        start_str += str;
    }
    for (let i = 0; i < end; i++) {
        end_str += str;
    }
    mid_str = string.slice(start, string.length - end)
    ret = start_str + mid_str + end_str
    return ret
}
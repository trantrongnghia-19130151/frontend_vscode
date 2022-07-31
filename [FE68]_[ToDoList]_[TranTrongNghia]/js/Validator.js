
function Validator(){
    
    this.kiemTraRong = function(value, spanId, mess) {
        if (value === '') {
            getEle(spanId).style.display = 'block';
            getEle(spanId).innerHTML = mess;
            return false;
        }

        getEle(spanId).style.display = 'none';
        getEle(spanId).innerHTML = '';
        return true;
    };
    this.kiemTraTrung = function(value, arrTask, spanId, mess){
        for(var i = 0; i < arrTask.length; i++){
            if(arrTask[i].taskName === value){
                getEle(spanId).style.display = 'block';
                getEle(spanId).innerHTML = mess;
            return false;
            }
        }
        getEle(spanId).style.display = 'none';
        getEle(spanId).innerHTML = '';
        return true;
    }
}
/*
���ߣ���Ԫ
���͵�ַ��http://www.cnblogs.com/iyangyuan/
˵������ӭת�أ��������ذ�Ȩ���Ͻ�������ҵ��;��
*/


//������ʽ
var accountExpression = "";
//�ı������
var txtScreen;


//�������ʱ��ʼ���ı���
function loadScreen(){
    txtScreen = document.getElementById("txtScreen");
    txtScreen.innerHTML="0";
}

//���ʽƴ�ӷ���
function inputValue(value){
    //ƴ�ӱ��ʽ
    accountExpression += value;
    //��ʾ�ڽ�����
    txtScreen.innerHTML=accountExpression;
}

//���ʽ���㷽��
function inputResult(){
    
    //ȡ���������ʽ
    var fullExpression = accountExpression;
    //��ż򵥱��ʽ
    var partExpression = "";
    
    //ѭ��ȥ����
    //ԭ��ÿ��ȡ�����ڲ����ţ����ڲ������еı��ʽ�϶��Ǽ򵥱��ʽ�������ŵı��ʽ��
    while(fullExpression.indexOf("(")>=0){
        //��ȡ���ڲ������еļ򵥱��ʽ
        partExpression = (fullExpression.split("(")[fullExpression.split("(").length-1]).split(")")[0];
        //��Դ���ʽ�е����ڲ������û���������
        fullExpression = fullExpression.replace("(" + partExpression + ")",getSimpleExpressionResult(partExpression));
    }
    
    //��ʱ�������ʽ�Ѿ��Ǽ򵥱��ʽ����ʽ����������
    txtScreen.innerHTML = getSimpleExpressionResult(fullExpression);
    //��ձ��ʽ�ַ���
    accountExpression = "";
}

//��ȡ�򵥱��ʽ���
function getSimpleExpressionResult(ex){
    //�������
    var leftNumber = 0;
    //�Ҳ�����
    var rightNumber = 0;
    //��ȡ��������������ʽ
    var regex = /[\+,\-,\*,/]/;
    //��ŵ������ʽ������1+1
    var partExpression = "";
    //��Ž��
    var result = 0;
    
    //����˷�
    while(ex.indexOf("*")>=0){
        //ȡ�Ҳ�����
        rightNumber = parseFloat(ex.split("*")[ex.split("*").length-1].split(regex)[0]);
        //ȡ�������
        leftNumber = parseFloat(ex.split("*")[ex.split("*").length-2].split(regex)[ex.split("*")[ex.split("*").length-2].split(regex).length-1]);
        //ƴ�ӵ������ʽ
        partExpression = leftNumber + "*" + rightNumber;
        //���㵥�����ʽ���
        result = parseFloat(leftNumber) * parseFloat(rightNumber);
        //��Դ���ʽ��ȥ���õ������ʽ
        ex = ex.replace(partExpression,result);
    }
    //�����
    while(ex.indexOf("/")>=0){
        //ȡ�Ҳ�����
        rightNumber = parseFloat(ex.split("/")[ex.split("/").length-1].split(regex)[0]);
        //ȡ�������
        leftNumber = parseFloat(ex.split("/")[ex.split("/").length-2].split(regex)[ex.split("/")[ex.split("/").length-2].split(regex).length-1]);
        //ƴ�ӵ������ʽ
        partExpression = leftNumber + "/" + rightNumber;
        //���㵥�����ʽ���
        result = parseFloat(leftNumber) / parseFloat(rightNumber);
        //��Դ���ʽ��ȥ���õ������ʽ
        ex = ex.replace(partExpression,result);
    }
    //�ӷ��ͼ����Ƚ����⣬���ô������ҵ�˳�����
    
    //��ȡ�������������ʽ
    var regexg = /[\+,\-,\*,/]/g;
    //��Ų�����������
    var numberArray;
    //��������������
    var operatorArray;
    
    //��ȡ���в�����
    numberArray = ex.split(regex);
    //��ȡ���������
    operatorArray = ex.match(regexg);
    
    //�������������������������
    result = parseFloat(numberArray[0]);
    for(var i=1;i<numberArray.length;i++){
        //�ж���ʲô����
        if(operatorArray[i-1].toString() == "+"){
            result += parseFloat(numberArray[i]);
        }else if(operatorArray[i-1].toString() == "-"){           
            result -= parseFloat(numberArray[i]);
        }
    }
    
    //���������
    return result;
}


//�˸񷽷�
function inputC(){
    if(accountExpression.length>0){
        //�������һ���ַ�
        accountExpression = accountExpression.substring(0,accountExpression.length-1);
        //��ʾ�ڽ�����
        txtScreen.innerHTML=accountExpression;
    }
}

//�������
function inputCE(){
    accountExpression = "";
    txtScreen.innerHTML="0";
}
//�����ı�����һ��value
var forwardValue="";
//�ı������
var text;
//ul�б����
var list;
//�Ƿ�����ul�б���
var isHide=true;

//��ʼ������
function load(){
    //��ȡDOM����
    text = document.getElementById("keys");
    list = document.getElementById("possibilityKeys");
    //����������
    setInterval("checkTextValue()",500);
}

//ѭ������ı��������Ƿ�ı�
function checkTextValue(){
    //�ж������Ƿ�ı�
    if(forwardValue != text.value){
        //����һ���ı䣬���ul�б�
        list.innerHTML = "";
        //����һ���ı䣬���õ�ǰli�ڵ�
        currentli = null;
        //��¼������
        forwardValue=text.value;
        
        //�ж��ı����Ƿ�Ϊ��
        if(forwardValue != ""){
            //����ƥ���б�
            //����Ϊ����ʾ��ÿ�ζ���ʾ10��ƥ����
            for(var i=0;i<10;i++){
                //����һ��a��ǩ
                var a = document.createElement("a");
                //����a��ǩ����ʾ����
                //����Ӧ�ôӾ���Ľӿڻ�ȡ����,����Ϊ�˷�����ʾ��ֱ�����������ݺ��������������
                a.innerHTML = forwardValue + i;
                //����a��ǩ��href����
                //ֱ�ӵ����ύ�������������Ǹ�a��ǩ���ı�ֵ(��ʾ����)
                a.href = "javascript:listSubmit('" + (forwardValue + i) + "');";
                //��a��ǩ�����������¼�
                a.onmouseover=onmouseover;
                //��a��ǩ�������Ƴ��¼�
                a.onmouseout=onmouseout;
                //����һ��li��ǩ
                var li = document.createElement("li");
                //��a��ǩ���뵽li��ǩ��
                li.appendChild(a);
                //��li��ǩ����ul��
                list.appendChild(li);
            }
            
            //��ʾul�б�
            list.style.display = "block";
        }else{
            //���Ϊ�գ�����ul�б�
            list.style.display = "none";
        }
    }
}

//�ı���ʧȥ���㴦��
function hideul(){
    //�ж��Ƿ���Ҫ���أ���ul�б��е�����ʱ�������أ��������޷���ת
    if(isHide){
        //����ul�б�
        list.style.display = "none";
    }
}

//li�г�����������봦��
function onmouseover(){
    isHide=false;
}

//li�г���������Ƴ��¼�����
function onmouseout(){
    isHide=true;
}

//�б��ύ������
function listSubmit(value){
    //���ı���ֵ
    text.value=value;
    //�ֶ��ύ��
    document.forms[0].submit();
}

//��ť�ύ������
function btnSubmit(){
    //��һ�����ƣ���ֹ�Ƿ��ύ
    if(text.value != ""){
        //��Ϊ�����ύ��
        document.forms[0].submit();
    }
}



function changeTable(currentItem){
    //����id��ȡ����ѡ���ul�ڵ���ӽڵ�
    var tabItems = document.getElementById("tab_items").childNodes;
    //��ȡ����Ԫ��
    var content = document.getElementById("tab_content");
    
    //ע�⣺��Ҫ��js��ֱ��дCSS���룬Ҫ�Ȱ���ʽ��CSS�ļ���д�ã�Ȼ��ȥ�ı�Ԫ�ص���ʽ���ơ�
    
    //�������нڵ����ʽΪ��δѡ�С�
    for(var i=0;i<tabItems.length;i++){
        //�ж��Ƿ���li�ڵ�
        if(tabItems[i].nodeName == "LI"){
            //���ýڵ����ʽΪ��δѡ�С�
            //liComm unselectedli��������ʽ������ͬʱ������������ʽ
            tabItems[i].className="liComm unselectedli";
        }
    }
    
    //���õ�ǰ�ڵ���ʽΪѡ��
    currentItem.className="liComm selectedli";
    
    //�޸�����
    content.innerHTML = currentItem.firstChild.firstChild.firstChild.nodeValue;
}
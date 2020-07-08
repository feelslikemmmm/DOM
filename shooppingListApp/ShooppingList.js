const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.tooter__button');

function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아오기
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
    const item = createItem(text);

    //3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);

    //4.새로 추가된 아이템으로 이동 스크롤링
    item.scrollIntoView({
        block: 'center'
    });
    //5. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

function createItem(text) {
    //li태그 만들기
    const itemRow = document.createElement('li');
    //만든 li태그에 클래스 추가하기
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })


    //li태그안에 div태그 만들기
    const itemDivider = document.createElement('div');
    //div태그에 클래스추가
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;

}

addBtn.addEventListener('click', () => {
    onAdd();
});

//enter key 눌렀을때 인풋텍스트가 추가되는 기능
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});
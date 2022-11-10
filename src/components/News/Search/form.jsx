import { React } from 'react';

import './index.scss';
import DropdownSelect from '../../DropdownSelect'


const SearchForm = ({search, info}) => {
    const handleSubmit = (event) => {
        const data = {
            text: event.target.text.value,
            time: event.target.time.value,
            sort: event.target.sort.value 
        }
        search(data)
    }

    let request

    if (info.category) {
        request = <h1 className='search__category'>{decodeURI(info.category).replaceAll('+', ' ')}</h1>
    } else if (info.author) {
        request = <div className="search__author">
                <div className="search__author_photo">
                    <img src="https://rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg" alt="Фотография автора" />
                </div>
                <author className="search__author_text">
                    <h1 className="search__author_name">{info.author}</h1>
                    <div className="search__author_info">краткая информация об авторе</div>
                </author>
            </div>
    } else if (info.text) {
        request = 
                    <fieldset>
                        <input type="text" name="text" placeholder='Поиск' className="search__form_input_text" defaultValue={decodeURI(info.text).replaceAll('+', ' ')}/>
                        <button type="submit" className='search__form_submit'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.8453 35.4883L28.3865 26.0296C30.5147 23.3735 31.6719 20.0702 31.6665 16.6667C31.6665 8.3825 24.9511 1.66667 16.6665 1.66667C8.38234 1.66667 1.6665 8.3825 1.6665 16.6667C1.6665 24.9508 8.38234 31.6667 16.6665 31.6667C20.2082 31.6667 23.4632 30.4392 26.0294 28.3863L35.4882 37.845C35.6427 38 35.8264 38.1229 36.0286 38.2067C36.2308 38.2905 36.4476 38.3336 36.6665 38.3333C36.9961 38.3333 37.3183 38.2356 37.5924 38.0525C37.8665 37.8694 38.0801 37.6091 38.2063 37.3046C38.3325 37.0001 38.3655 36.665 38.3012 36.3417C38.237 36.0184 38.0783 35.7214 37.8453 35.4883ZM16.6665 28.3333C10.2232 28.3333 4.99984 23.11 4.99984 16.6667C4.99984 10.2233 10.2232 5 16.6665 5C23.1103 5 28.3332 10.2233 28.3332 16.6667C28.3332 23.11 23.1103 28.3333 16.6665 28.3333Z" fill="#2269F4"/>
                            </svg>
                        </button>
                    </fieldset>
    } else {
        request = 
                    <fieldset>
                        <input type="text" name="text" placeholder='Поиск' className="search__form_input_text"/>
                        <button type="submit" className='search__form_submit'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.8453 35.4883L28.3865 26.0296C30.5147 23.3735 31.6719 20.0702 31.6665 16.6667C31.6665 8.3825 24.9511 1.66667 16.6665 1.66667C8.38234 1.66667 1.6665 8.3825 1.6665 16.6667C1.6665 24.9508 8.38234 31.6667 16.6665 31.6667C20.2082 31.6667 23.4632 30.4392 26.0294 28.3863L35.4882 37.845C35.6427 38 35.8264 38.1229 36.0286 38.2067C36.2308 38.2905 36.4476 38.3336 36.6665 38.3333C36.9961 38.3333 37.3183 38.2356 37.5924 38.0525C37.8665 37.8694 38.0801 37.6091 38.2063 37.3046C38.3325 37.0001 38.3655 36.665 38.3012 36.3417C38.237 36.0184 38.0783 35.7214 37.8453 35.4883ZM16.6665 28.3333C10.2232 28.3333 4.99984 23.11 4.99984 16.6667C4.99984 10.2233 10.2232 5 16.6665 5C23.1103 5 28.3332 10.2233 28.3332 16.6667C28.3332 23.11 23.1103 28.3333 16.6665 28.3333Z" fill="#2269F4"/>
                            </svg>
                        </button>
                    </fieldset>
    }

    return (
        <div className="search__form">
            <form action="/search" onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
                { request }
                <fieldset className='search__form_extra_inputs'>
                    <DropdownSelect name={'time'} options={['За всё время', 'За неделю', 'За месяц', 'За год', 'Выбрать период']}></DropdownSelect>
                    <DropdownSelect name={'sort'} options={['По дате', 'По популярности']}></DropdownSelect>
                </fieldset>
            </form>
            <div className="search__form_result_num">Найдено: 234234</div>
        </div>
    );
}

export default SearchForm
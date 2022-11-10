import { React, useState } from 'react';
import DateRangePicker from 'rsuite/DateRangePicker';

import './index.scss';

const { afterToday } =
  DateRangePicker;

const DropdownSelect = ({name, options}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(options[0]);
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);

    window.addEventListener('click', function (e) {
        if (!e.target.closest(`.dropdown_select[data-name='${name}']`) && open) {
            setOpen(false)
            setCalendarOpen(false)
        }
    })

    const renderDates = (dates) => {
        setSelectedDates(dates)
        let range = dates.map(d => {
            let date = new Date(d)
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        })
        if (range[0] === range[1]) {
            range = range[0]
        } else {
            range = range.join('-')
        }
        setValue(range)
    }

    const locale = {
        sunday: 'вс',
        monday: 'пн',
        tuesday: "вт",
        wednesday: "ср",
        thursday: "чт",
        friday: "пт",
        saturday: "сб",
        today: "сегодня",
        yesterday: "вчера",
        october: "Окт"
    };

    let selectCount = 0;
    let range = []
    const handleSelect = (date) => {
        selectCount++;
        range.push(date)
        if (selectCount === 2) {
            renderDates(range);
            setCalendarOpen(false);
            selectCount = 0;
            range = [];
        }
    }

    return (
        <div className={selectedDates.length ? 'dropdown_select dates_selected' : 'dropdown_select'} data-name={name}>
            {
                isCalendarOpen && <DateRangePicker isoWeek open showOneCalendar locale={locale} 
                disabledDate={afterToday()} editable={false} ranges={[]} 
                character={'-'} format={'dd.MM.yyyy'} placeholder={'Выбрать период'} 
                defaultValue={selectedDates}
                container={() => {
                    return document.querySelector('.dropdown_select_input');
                }}
                onSelect={(date) => {
                    handleSelect(date)
                }}/>
            }
            <div className="dropdown_select_input" onClick={() => { setOpen(!open) }}>
                <input type="text" value={value} readOnly={true} name={name}/>
                <div className={open ? "dropdown_select__options_btn dropdown_select__options_btn_active" : "dropdown_select__options_btn"}>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.374359 0.443328C0.643686 0.174001 1.08035 0.174001 1.34968 0.443328L4.99995 4.0936L8.65022 0.443328C8.91955 0.174001 9.35621 0.174001 9.62554 0.443328C9.89487 0.712655 9.89487 1.14932 9.62554 1.41865L5.48761 5.55658C5.21828 5.82591 4.78162 5.82591 4.51229 5.55658L0.374359 1.41865C0.105031 1.14932 0.105031 0.712655 0.374359 0.443328Z" fill="#222222"/>
                    </svg>
                </div>
                <ul className={open && !isCalendarOpen ? "dropdown_select__options dropdown_select__options_active" : "dropdown_select__options"}>
                    {options.map((option, i) => 
                        option === 'Выбрать период' ?
                            <li key={i} className="dropdown_select__option dropdown_select__option_date" onClick={() => {setCalendarOpen(true)}}>{option}</li>
                        :
                            <li key={i} className="dropdown_select__option" onClick={() => {setValue(option); setSelectedDates([])}}>{option}</li>
                    )}
                </ul>
            </div>
        </div>
        
    )
}

export default DropdownSelect;
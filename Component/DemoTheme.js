//1. import thư viện
import React, {createContext, useState, useContext} from "react";
//2. Khởi tạo cho theme
const ThemeContext = createContext();
//export theme
export const DemoTheme = ({children})=>{
    //3. Tạo state lưu trạng thái sử dụng mẫu theme (VD: sáng/tối)
    const [theme, setTheme] = useState('light')
    // Viết hàm chuyển đổi mẫu giao diện
    const doiGiaoDien = ()=>{
        console.log('Đổi giao diện' + theme);
        setTheme((theme === 'light')?'dark':'light')
        
    }
    return(
        <ThemeContext.Provider value={{theme, doiGiaoDien}}>
        {children}
        </ThemeContext.Provider>
    )

}
//4. định nghĩa hàm hook
export const useTheme = ()=> useContext ( ThemeContext);
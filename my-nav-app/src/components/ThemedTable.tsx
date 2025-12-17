import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


const ThemedTable = () => {
const { theme } = useContext(ThemeContext);


return (
<table className={`table ${theme === "light" ? "table-light" : "table-dark"}`}>
<thead>
<tr>
<th>#</th>
<th>Name</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Mohammed</td>
<td>Developer</td>
</tr>
<tr>
<td>2</td>
<td>Yaseen</td>
<td>Designer</td>
</tr>
<tr>
<td>3</td>
<td>Kola</td>
<td>Tester</td>
</tr>
</tbody>
</table>
);
};


export default ThemedTable;
import Product from "./components/Product";
import { DataProvider } from "./contexts/DataContext";

const App = () => {

    return (
        < DataProvider>
            < Product/>
        </DataProvider>
    )
}

export default App;
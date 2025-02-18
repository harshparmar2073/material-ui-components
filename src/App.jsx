import React from 'react'
import Form from './components/Form'
import AlertExample from './components/Alert'
import Avtar_Badge from './components/Avtar_Badge'
import ButtonExample from './components/Button'
import ButtonGroupExample from './components/ButtonGroup'
import AppbarExample from './components/Appbar'
import AutocompleteExample from './components/Autocomplete'
import CardExample from './components/Card'
import CheckBoxExample from './components/CheckBox'
import DialogExample from './components/Dialog'
import FabExample from './components/Fab'
import ListsExample from './components/Lists'
import PaperExample from './components/Paper'
import ProgressExample from './components/Progress'
import RadioExample from './components/Radio'
import RatingExample from './components/Rating'
import SelectExample from './components/Select'
import SkeletonExample from './components/Skeleton'
import SliderExample from './components/Slider'
import SnackbarExample from './components/Snackbar'
import TableExample from './components/Table'
import TextFieldExample from './components/TextField'
import ToggleButtonsExample from './components/ToggleButton'
import ToolTipExample from './components/ToolTip'
import TypographyExample from './components/Typography'
import LinkExample from './components/Link'
import BasicMenu from './components/Menu'
import { Route, Routes } from 'react-router'
import BottomNavExample from './components/Bottom-Navigation'
import BasicBreadcrumbs from './components/Breadcrump'
import DrawerExample from './components/Drawer'
import ContainerExample from './components/Container'
import GridExample from './components/Grid'
import StackExample from './components/Stack'
import TabExample from './components/Tabs'
import StepperExample from './components/Stepper'
import ResponsiveExample from './components/Responsive'
import SpeedDialExample from './components/SpeedDial'
import MenuTask from './components/MenuTask'
import ComponentRendere from './components/ComponentRender'
import ComponentRender from './components/ComponentRender'
import DialogBoxTask from './components/DialogBoxTask'
import GenerateButtons from './components/GenerateButton'
const App = () => {
  return (

     <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/alert" element={<AlertExample/>} />
      <Route path="/appbar" element={<AppbarExample/>} />
      <Route path="/autocomplete" element={<AutocompleteExample/>} />
      <Route path="/avtar" element={<Avtar_Badge/>} />
      <Route path="/button" element={<ButtonExample/>} />
      <Route path="/button-group" element={<ButtonGroupExample/>} />
      <Route path="/card" element={<CardExample/>} />
      <Route path="/checkbox" element={<CheckBoxExample/>} />
      {/* <Route path="/dialog" element={<DialogExample/>} /> */}
      <Route path="/fab" element={<FabExample/>} />
      <Route path="/lists" element={<ListsExample/>} />
      <Route path="/paper" element={<PaperExample/>} />
      <Route path="/progress" element={<ProgressExample/>} />
      <Route path="/radio" element={<RadioExample/>} />
      <Route path="/rating" element={<RatingExample/>} />
      {/* <Route path="/select" element={<SelectExample/>} /> */}
      <Route path="/skeleton" element={<SkeletonExample/>} />
      <Route path="/slider" element={<SliderExample/>} />
      <Route path="/snackbar" element={<SnackbarExample/>} />
      <Route path="/table" element={<TableExample/>} />
      <Route path="/textfield/:name" element={<TextFieldExample />} />
      <Route path="/togglebutton" element={<ToggleButtonsExample/>} />
      <Route path="/tooltip" element={<ToolTipExample/>} />
      <Route path="/typography" element={<TypographyExample/>} />
      <Route path="/link" element={<LinkExample/>} />
      <Route path="/bottom-navigation" element={<BottomNavExample/>} />
      <Route path="/breadcrump" element={<BasicBreadcrumbs/>} />
      <Route path="/drawer" element={<DrawerExample/>} />
      <Route path="/container" element={<ContainerExample/>} />
      <Route path="/grid" element={<GridExample/>} />
      <Route path="/menu" element={<BasicMenu/>} />
      <Route path="/stack" element={<StackExample/>} />
      <Route path="/tabs" element={<TabExample/>} />
      <Route path="/stepper" element={<StepperExample/>} />
      <Route path="/responsive" element={<ResponsiveExample/>} />
      <Route path="/speed-dial" element={<SpeedDialExample/>} />
      <Route path="/menu-task" element={<MenuTask/>} />
      <Route path="/:component" element={<ComponentRender />} />
      <Route path="/dialog-box-task" element={<DialogBoxTask/>} />
      <Route path="/generate/:count" element={<GenerateButtons/>} />


    </Routes>

  )
}

export default App
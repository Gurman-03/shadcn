import { useState } from 'react'
import './App.css'
import { Button } from "./components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card"
import { Label } from "./components/ui/label"
import { Switch } from "./components/ui/switch"
import { AppSidebar } from './Sidebar' // Make sure this import matches your Sidebar component path
import { SidebarProvider, SidebarTrigger , Sidebar } from "@/components/ui/sidebar"

function App() {
  const [isDark, setIsDark] = useState(false)
  
  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="bg-background text-foreground">
      <SidebarProvider> {/* Wrap the entire app with SidebarProvider */}
        <div className="">
          {/* Sidebar */}
          <AppSidebar /> {/* Render the sidebar */}
          <SidebarTrigger />

          {/* Main Content */}
          <div className=" bg-blue-100">
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Sidebar Trigger */}
               {/* Add the trigger to toggle the sidebar */}

              {/* Theme Toggle */}
              <div className="flex items-center space-x-2">
                <Label htmlFor="theme-mode">Dark Mode</Label>
                <Switch
                  id="theme-mode"
                  checked={isDark}
                  onCheckedChange={toggleTheme}
                />
              </div>

              {/* Primary Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Theme Example</CardTitle>
                  <CardDescription>
                    This card demonstrates the neutral theme with various components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Button Variants */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Button Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="default">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>

                  {/* Background Colors */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Background Colors</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-4 rounded bg-primary text-primary-foreground">
                        Primary
                      </div>
                      <div className="p-4 rounded bg-secondary text-secondary-foreground">
                        Secondary
                      </div>
                      <div className="p-4 rounded bg-muted text-muted-foreground">
                        Muted
                      </div>
                      <div className="p-4 rounded bg-accent text-accent-foreground">
                        Accent
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    The theme automatically adjusts for dark mode
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App
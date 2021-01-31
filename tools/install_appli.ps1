Get-ExecutionPolicy

Write-Host "Hello, world!"

$checked_applications = @(
    installed = @(); not_install = @();
)
$applications_ary = $(
     (Get-WmiObject Win32_Product | Select-Object Name),
     (Get-ChildItem "HKLM:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" | Select-Object Name),
     (Get-Childitem "HKCU:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" | Select-Object Name)
)
foreach ($appli_ary in $applications_ary) {
    foreach ($appli in $appli_ary) {
        if ($appli.Name) {
            Write-Host $appli.Name
            if ($appli.Name -like "Inkscape%") {
                
            }
        } elseif ($appli.DisplayName) {
            Write-Host $appli.DisplayName
        }
    }
}

pause

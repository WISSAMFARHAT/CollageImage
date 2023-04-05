using Components.Model;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.IO;
using System.Net.Mime;

namespace Components.Pages;
public partial class Images
{

    [Parameter] public List<ImagesModel> ListImages { get; set; }
    public string Title { get; set; } = "";
    public bool CheckDisplay { get; set; } = false;
    public string Coloumn { get; set; } = "3";
    public int ColoumnFlex { get; set; } = 3;


    public async Task Save()
    {
        try
        {
             string data = await JS.InvokeAsync<string>("takeScreenshot", $"{Title}.png");
         }
        catch (Exception)
        {
        }

    }
}

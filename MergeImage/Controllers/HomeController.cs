using AngryMonkey.CloudMVC;
using Components.Model;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using Website.Controllers;

namespace MergeImage.Controllers;
[Route("")]

public class HomeController : BaseController
{
    private IWebHostEnvironment HostEnv;

    public HomeController(IWebHostEnvironment env)
    {
        HostEnv = env;
    }

    [Route("")]

    public IActionResult Index()
    {
        CloudPage();

        return View();
    }

    [Route("template")]

    public IActionResult Template()
    {
        CloudPage("template");

        List<ImagesModel> images = new();

        string folderId = Request.Cookies["TempFolderId"];
        string fileDisc = $"Files/{folderId}";
        string filePath = Path.Combine(HostEnv.WebRootPath, fileDisc);

        if (!Directory.Exists(filePath))
            return RedirectToAction("Index");

        string[] files = Directory.GetFiles(filePath, "*", SearchOption.AllDirectories);

        foreach (string file in files)
        {
            string relativePath = file.Split("wwwroot")[2];// Get path relative to wwwroot
            string fileName = Path.GetFileNameWithoutExtension(file); // Get file name without extension

            images.Add(new()
            {
                Name = $"{fileName}",
                Url = relativePath.Replace("\\", "/")

            }) ;
        }


        return View(images);
    }

    [HttpPost]
    [Route("Clear")]
    public ActionResult Delete()
    {
        string folderId = Request.Cookies["TempFolderId"];

        // Get the full path to the file on disk
        string fileDisc = $"Files/{folderId}";
        string filePath = Path.Combine(HostEnv.WebRootPath, fileDisc);

        // Check if the folder exists
        if (Directory.Exists(filePath))
        {
            // Delete the folder
            Directory.Delete(filePath, true);

            return Ok();
        }
        else
        {
            // File not found
            return BadRequest();
        }

    }

    [Route("Upload")]
    public async Task<IActionResult> Upload(IFormFile file)
    {
        string folderId = Request.Cookies["TempFolderId"];

        string fileDisc = $"Files/{folderId}";
        string filePath = Path.Combine(HostEnv.WebRootPath, fileDisc);

        if (!Directory.Exists(filePath))
            Directory.CreateDirectory(filePath);

        string fileName = file.FileName;
        filePath = Path.Combine(filePath, fileName);

        using (FileStream fs = System.IO.File.Create(filePath))
        {
            file.CopyTo(fs);
        }

        return RedirectToAction("Index");

    }



    //[HttpPost]
    //[Route("delete")]
    //public ActionResult Delete([FromBody] string fileName)
    //{
    //    try
    //    {
    //        string folderId = Request.Cookies["TempFolderId"];

    //        string fileDisc = $"Files/{folderId}/{fileName}";
    //        string filePath = Path.Combine(HostEnv.WebRootPath, fileDisc);

    //        if (!System.IO.File.Exists(filePath))
    //            return Ok();

    //        // Delete the file
    //        System.IO.File.Delete(filePath);
    //        return Ok();


    //    }
    //    catch (Exception ex)
    //    {
    //        return BadRequest();
    //    }

    //}




}

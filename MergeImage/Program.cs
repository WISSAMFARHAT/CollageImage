using AngryMonkey.CloudWeb;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();

CloudWebConfig cloudWeb = new()
{
    PageDefaults = new()
    {
        Title = "Merge Image",
        BlazorRenderMode = CloudPageBlazorRenderModes.Server,
        AutoAppendBlazorStyles = true,
        CallingAssemblyName = "Components",
        Bundles = new()
         {
         new(){ Source = "css/site.css"},
         new(){ Source = "css/index.css"},
         new(){ Source = "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css"},
         }
    },
    TitleSuffix = " - Merge Image",
};

builder.Services.AddCloudWeb(cloudWeb);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseBlazorFrameworkFiles();
app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
       name: "default",
       pattern: "{controller=Home}/{action=Index}/{id?}");

    endpoints.MapBlazorHub();
});

await app.RunAsync();
 
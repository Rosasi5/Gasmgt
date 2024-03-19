from fastapi import FastAPI
from sqlitedatabase import models
from sqlitedatabase.database import engine
from sqlalchemy.orm import registry
from routers import customer
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import Request


app = FastAPI()

#connect to css file directory
app.mount("/static", StaticFiles(directory="Frontend/css"), name="static")

#define templates directory
templates = Jinja2Templates(directory="Frontend/html")

app.include_router(customer.router)

# Route to serve HTML page with "Create account" button
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("accountdetailsform.html", {"request": request})



models.Base.metadata.create_all(engine)

#registry.configure(bind=engine)
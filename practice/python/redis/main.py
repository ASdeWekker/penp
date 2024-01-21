"""
    Testing some Redis stuff.
"""


from datetime import datetime
import redis


r = redis.Redis(host='localhost', port=6379, decode_responses=True)
now = datetime.now()

last_ran = r.get("qbit_last_ran")
print(last_ran)
print(r.hgetall("user-session:123"))
r.set("qbit_last_ran", str(now))
r.hset("user-session:123", mapping={
    "name": "Alex",
    "surname": "de Wekker",
    "company": "Swift",
    "age": "30"
})
print("Done")

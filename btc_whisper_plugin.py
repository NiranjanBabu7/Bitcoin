#!/usr/bin/env python3
from pyln.client import Plugin


plugin = Plugin()

@plugin.method("attach_context")
def attach_context(plugin, params, request):
    payment_hash = params.get("payment_hash")
    encrypted_context = params.get("encrypted_context")
    # Here, you’d save the encrypted_context linked to the payment_hash (DB or file)
    plugin.log(f"Context attached to payment {payment_hash}: {encrypted_context}")
    return {"status": "success"}

@plugin.init()
def init(options, configuration, plugin):
    plugin.log("BTC Whisper Core Lightning Plugin initialized")

plugin.run()
